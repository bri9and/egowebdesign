import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createServiceClient } from "@/lib/supabase";

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * GET /api/ai/preview/[id]
 *
 * Returns a fully renderable HTML page that displays the draft's React component.
 * Used as the iframe src in the AI builder UI.
 *
 * The approach: We inject the generated TSX as a string into a client-side page
 * that uses Babel standalone + React to transpile and render it in the browser.
 * This avoids needing a build step for preview.
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId } = await auth();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { id } = await params;
  if (!id) {
    return new Response("Draft ID required", { status: 400 });
  }

  const supabase = createServiceClient();

  // Verify customer
  const { data: customer } = await (supabase
    .from("customers") as any)
    .select("id")
    .eq("clerk_id", userId)
    .single();

  if (!customer) {
    return new Response("Customer not found", { status: 404 });
  }

  // Fetch draft
  const { data: draft } = await (supabase
    .from("site_drafts") as any)
    .select("id, customer_id, generated_code, status")
    .eq("id", id)
    .single();

  if (!draft) {
    return new Response("Draft not found", { status: 404 });
  }

  if (draft.customer_id !== customer.id) {
    return new Response("Forbidden", { status: 403 });
  }

  if (!draft.generated_code) {
    return new Response(
      renderErrorPage("This draft is still generating. Please wait..."),
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }

  // Build the preview HTML
  const html = renderPreviewPage(draft.generated_code);

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

/**
 * Render the generated React component in a full HTML page.
 *
 * Strategy: We use Babel standalone to transpile the TSX in the browser,
 * then render it with React. This gives us a real live preview without
 * needing any server-side build step for arbitrary generated code.
 */
function renderPreviewPage(code: string): string {
  // We need to extract the default export function name from the code
  // and then render it. We also need to handle imports.

  // Sanitize the generated code for safe embedding inside a <script> tag.
  // Escape closing script tags to prevent injection that breaks out of the tag.
  const sanitizedCode = code
    .replace(/<\/script/gi, "<\\/script");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Site Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <script src="https://unpkg.com/react@19/umd/react.production.min.js"><\/script>
  <script src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"><\/script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
  <script src="https://unpkg.com/lucide-react@0.577.0/dist/umd/lucide-react.min.js"><\/script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #0A0A12; }
    #preview-error {
      display: none;
      padding: 2rem;
      color: #ff6b6b;
      font-family: monospace;
      font-size: 14px;
      white-space: pre-wrap;
      background: #1a1a2e;
      border: 1px solid #ff6b6b33;
      border-radius: 8px;
      margin: 2rem;
    }
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300 900;
      font-display: swap;
      src: url('https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiA.woff2') format('woff2');
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <div id="preview-error"></div>

  <script>
    // Make lucide-react icons available globally
    window.lucideIcons = window.lucideReact || {};
  <\/script>

  <script type="text/babel" data-type="module" data-presets="react,typescript">
    // Provide a module system shim for the generated code
    const lucide = window.lucideReact || {};

    // Create a proxy that returns a fallback component for any missing icon
    const iconProxy = new Proxy(lucide, {
      get(target, prop) {
        if (prop in target) return target[prop];
        // Return a simple span as fallback for unknown icons
        return function FallbackIcon(props) {
          return React.createElement('span', {
            style: { display: 'inline-block', width: props?.className?.includes('w-') ? undefined : 16, height: props?.className?.includes('h-') ? undefined : 16 },
            className: props?.className || '',
          }, '');
        };
      }
    });

    // All lucide-react icons the generated code might import
    const {
      Phone, Zap, ShieldCheck, Clock, Star, MapPin, Award, CheckCircle,
      AlertTriangle, BatteryCharging, Home, Plug, Building2, BadgeCheck, Cable,
      Wrench, Droplets, Flame, Construction, Pipette, Shovel, PhoneCall,
      Search, Hammer, ThumbsUp, Heart, Leaf, Sun, Moon, Coffee, Camera,
      Globe, Mail, MessageCircle, ArrowRight, ArrowLeft, ChevronRight,
      ChevronDown, Menu, X, ExternalLink, Users, Briefcase, Shield,
      Settings, Truck, Package, Tool, Paintbrush, Scissors, Music,
      BookOpen, GraduationCap, Stethoscope, Scale, Gavel, Calculator,
      DollarSign, TrendingUp, BarChart, PieChart, Target, Lightbulb,
      Wifi, Monitor, Smartphone, Printer, HardDrive, Code, Database,
      Cloud, Lock, Key, Eye, EyeOff, Bell, Calendar, Map, Navigation,
      Compass, Anchor, Ship, Plane, Car, Bike, Bus, Train, Mountain,
      TreePine, Flower, Bug, Fish, Bird, Dog, Cat, Utensils, Wine,
      Beer, Pizza, Salad, Cake, IceCream, ShoppingCart, ShoppingBag,
      CreditCard, Receipt, Tag, Percent, Gift, PartyPopper, Sparkles,
      Gem, Crown, Trophy, Medal, Flag, Rocket, Satellite, Atom,
      Microscope, TestTube, Pill, Activity, Thermometer, Syringe,
      Ambulance, CircleDot, CircleCheck, CircleX, Info, HelpCircle,
      AlertCircle, FileText, Folder, Image, Video, Mic, Volume2,
      Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Download,
      Upload, Share, Copy, Clipboard, Bookmark, Link, Hash, AtSign,
      Send, Inbox, Archive, Trash, Edit, PenTool, Type, Bold, Italic,
      Underline, AlignLeft, AlignCenter, AlignRight, List, Grid,
      Layers, Layout, Sidebar, Columns, Rows, Table, Filter, SortAsc,
      SortDesc, RefreshCw, RotateCw, Move, Maximize, Minimize,
      ZoomIn, ZoomOut, Crosshair, Scan, QrCode, Fingerprint,
      UserCheck, UserPlus, UserMinus, Users2, Building, Factory,
      Store, Warehouse, Church, School, Hospital, Library,
    } = iconProxy;

    // Store icons and React globally so the generated code script can access them
    window.__previewIcons__ = {
      Phone, Zap, ShieldCheck, Clock, Star, MapPin, Award, CheckCircle,
      AlertTriangle, BatteryCharging, Home, Plug, Building2, BadgeCheck, Cable,
      Wrench, Droplets, Flame, Construction, Pipette, Shovel, PhoneCall,
      Search, Hammer, ThumbsUp, Heart, Leaf, Sun, Moon, Coffee, Camera,
      Globe, Mail, MessageCircle, ArrowRight, ArrowLeft, ChevronRight,
      ChevronDown, Menu, X, ExternalLink, Users, Briefcase, Shield,
      Settings, Truck, Package, Tool, Paintbrush, Scissors, Music,
      BookOpen, GraduationCap, Stethoscope, Scale, Gavel, Calculator,
      DollarSign, TrendingUp, BarChart, PieChart, Target, Lightbulb,
      Wifi, Monitor, Smartphone, Printer, HardDrive, Code, Database,
      Cloud, Lock, Key, Eye, EyeOff, Bell, Calendar, Map, Navigation,
      Compass, Anchor, Ship, Plane, Car, Bike, Bus, Train, Mountain,
      TreePine, Flower, Bug, Fish, Bird, Dog, Cat, Utensils, Wine,
      Beer, Pizza, Salad, Cake, IceCream, ShoppingCart, ShoppingBag,
      CreditCard, Receipt, Tag, Percent, Gift, PartyPopper, Sparkles,
      Gem, Crown, Trophy, Medal, Flag, Rocket, Satellite, Atom,
      Microscope, TestTube, Pill, Activity, Thermometer, Syringe,
      Ambulance, CircleDot, CircleCheck, CircleX, Info, HelpCircle,
      AlertCircle, FileText, Folder, Image, Video, Mic, Volume2,
      Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Download,
      Upload, Share, Copy, Clipboard, Bookmark, Link, Hash, AtSign,
      Send, Inbox, Archive, Trash, Edit, PenTool, Type, Bold, Italic,
      Underline, AlignLeft, AlignCenter, AlignRight, List, Grid,
      Layers, Layout, Sidebar, Columns, Rows, Table, Filter, SortAsc,
      SortDesc, RefreshCw, RotateCw, Move, Maximize, Minimize,
      ZoomIn, ZoomOut, Crosshair, Scan, QrCode, Fingerprint,
      UserCheck, UserPlus, UserMinus, Users2, Building, Factory,
      Store, Warehouse, Church, School, Hospital, Library,
    };
    window.__previewReady__ = true;
  <\/script>

  <script>
    /**
     * Render the generated code in a sandboxed iframe using srcdoc.
     * This avoids using new Function() / eval() to execute arbitrary code
     * in the main page context. The iframe sandbox restricts capabilities
     * to only allow-scripts (no same-origin access, no forms, no popups).
     */
    function waitForPreviewReady(cb) {
      if (window.__previewReady__) { cb(); return; }
      var check = setInterval(function() {
        if (window.__previewReady__) { clearInterval(check); cb(); }
      }, 50);
    }

    waitForPreviewReady(function() {
      var generatedCode = ${JSON.stringify(sanitizedCode)};

      // Transform the code: strip imports/exports for in-browser use
      var transformedCode = generatedCode
        .replace(/^import\\s+.*?from\\s+["'].*?["'];?\\s*$/gm, '')
        .replace(/^import\\s+["'].*?["'];?\\s*$/gm, '')
        .replace(/^export\\s+const\\s+metadata/gm, 'const metadata')
        .replace(/^export\\s+default\\s+function/gm, 'function')
        .replace(/^export\\s+default\\s+/gm, 'const __DefaultExport__ = ')
        .replace(/^export\\s+/gm, '');

      // Find the component name
      var funcMatch = transformedCode.match(/^function\\s+([A-Z][A-Za-z0-9]*)/m);
      var componentName = funcMatch ? funcMatch[1] : null;

      if (!componentName) {
        var errorDiv = document.getElementById('preview-error');
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'Preview Error:\\n\\nCould not find a default export component function in the generated code.';
        return;
      }

      // Build the sandboxed iframe srcdoc HTML
      // The iframe gets its own React/Babel/Tailwind environment
      var srcdoc = '<!DOCTYPE html>'
        + '<html lang="en"><head>'
        + '<meta charset="utf-8"/>'
        + '<meta name="viewport" content="width=device-width,initial-scale=1"/>'
        + '<script src="https://cdn.tailwindcss.com"><\\/script>'
        + '<script src="https://unpkg.com/react@19/umd/react.production.min.js"><\\/script>'
        + '<script src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"><\\/script>'
        + '<script src="https://unpkg.com/@babel/standalone/babel.min.js"><\\/script>'
        + '<script src="https://unpkg.com/lucide-react@0.577.0/dist/umd/lucide-react.min.js"><\\/script>'
        + '<style>*{margin:0;padding:0;box-sizing:border-box}body{background:#0A0A12}'
        + '@font-face{font-family:"Inter";font-style:normal;font-weight:300 900;font-display:swap;'
        + 'src:url("https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiA.woff2") format("woff2")}'
        + '</style></head><body><div id="root"></div>'
        + '<script type="text/babel" data-type="module" data-presets="react,typescript">'
        + 'var lucide=window.lucideReact||{};'
        + 'var iconProxy=new Proxy(lucide,{get(t,p){if(p in t)return t[p];return function F(props){return React.createElement("span",{style:{display:"inline-block",width:16,height:16},className:props?.className||""},"")};}});'
        + 'var {'
        + 'Phone,Zap,ShieldCheck,Clock,Star,MapPin,Award,CheckCircle,'
        + 'AlertTriangle,BatteryCharging,Home,Plug,Building2,BadgeCheck,Cable,'
        + 'Wrench,Droplets,Flame,Construction,Pipette,Shovel,PhoneCall,'
        + 'Search,Hammer,ThumbsUp,Heart,Leaf,Sun,Moon,Coffee,Camera,'
        + 'Globe,Mail,MessageCircle,ArrowRight,ArrowLeft,ChevronRight,'
        + 'ChevronDown,Menu,X,ExternalLink,Users,Briefcase,Shield,'
        + 'Settings,Truck,Package,Tool,Paintbrush,Scissors,Music,'
        + 'BookOpen,GraduationCap,Stethoscope,Scale,Gavel,Calculator,'
        + 'DollarSign,TrendingUp,BarChart,PieChart,Target,Lightbulb,'
        + 'Wifi,Monitor,Smartphone,Printer,HardDrive,Code,Database,'
        + 'Cloud,Lock,Key,Eye,EyeOff,Bell,Calendar,Map,Navigation,'
        + 'Compass,Anchor,Ship,Plane,Car,Bike,Bus,Train,Mountain,'
        + 'TreePine,Flower,Bug,Fish,Bird,Dog,Cat,Utensils,Wine,'
        + 'Beer,Pizza,Salad,Cake,IceCream,ShoppingCart,ShoppingBag,'
        + 'CreditCard,Receipt,Tag,Percent,Gift,PartyPopper,Sparkles,'
        + 'Gem,Crown,Trophy,Medal,Flag,Rocket,Satellite,Atom,'
        + 'Microscope,TestTube,Pill,Activity,Thermometer,Syringe,'
        + 'Ambulance,CircleDot,CircleCheck,CircleX,Info,HelpCircle,'
        + 'AlertCircle,FileText,Folder,Image,Video,Mic,Volume2,'
        + 'Play,Pause,SkipForward,SkipBack,Repeat,Shuffle,Download,'
        + 'Upload,Share,Copy,Clipboard,Bookmark,Link,Hash,AtSign,'
        + 'Send,Inbox,Archive,Trash,Edit,PenTool,Type,Bold,Italic,'
        + 'Underline,AlignLeft,AlignCenter,AlignRight,List,Grid,'
        + 'Layers,Layout,Sidebar,Columns,Rows,Table,Filter,SortAsc,'
        + 'SortDesc,RefreshCw,RotateCw,Move,Maximize,Minimize,'
        + 'ZoomIn,ZoomOut,Crosshair,Scan,QrCode,Fingerprint,'
        + 'UserCheck,UserPlus,UserMinus,Users2,Building,Factory,'
        + 'Store,Warehouse,Church,School,Hospital,Library'
        + '}=iconProxy;'
        + 'try{'
        + transformedCode.replace(/<\\/script/gi, '<\\\\/script')
        + '\\nvar root=ReactDOM.createRoot(document.getElementById("root"));'
        + 'root.render(React.createElement(' + componentName + '));'
        + '}catch(err){'
        + 'document.body.innerHTML="<pre style=\\"color:#ff6b6b;padding:2rem;font-size:14px;white-space:pre-wrap\\">"'
        + '+"Preview Error:\\\\n\\\\n"+((err&&err.message)||String(err))+"</pre>";'
        + '}'
        + '<\\/script></body></html>';

      // Hide the outer root, render in sandboxed iframe
      document.getElementById('root').style.display = 'none';

      var iframe = document.createElement('iframe');
      iframe.sandbox = 'allow-scripts';
      iframe.style.cssText = 'width:100%;height:100vh;border:none;';
      iframe.srcdoc = srcdoc;
      document.body.appendChild(iframe);
    });
  <\/script>
</body>
</html>`;
}

function renderErrorPage(message: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Preview</title>
  <style>
    body {
      margin: 0;
      background: #0A0A12;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      font-family: 'Inter', system-ui, sans-serif;
    }
    .msg {
      text-align: center;
      color: #8888A0;
      font-size: 16px;
    }
    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid #2A2A3E;
      border-top-color: #FF8000;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin: 0 auto 1rem;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="msg">
    <div class="spinner"></div>
    ${message}
  </div>
</body>
</html>`;
}
