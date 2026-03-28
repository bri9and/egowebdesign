import { ArrowDown, MapPin, Quote } from "lucide-react";

export const metadata = {
  title: "Inspirational Designs | Interior Design Studio — East Liberty, Pittsburgh",
  description:
    "Boutique interior design studio in East Liberty, Pittsburgh. Kitchen, bath & whole-home design with 84+ completed projects. BBB A+ rated. We are an experience.",
};

const IMG = "/sites/inspirational";

const projects = [
  { label: "Kitchen Redesign", src: `${IMG}/kitchen1.jpg`, span: 2 },
  { label: "Master Bath", src: `${IMG}/bath1.jpg`, span: 1 },
  { label: "Living Room Staging", src: `${IMG}/interior1.jpg`, span: 1 },
  { label: "Full-Home Transformation", src: `${IMG}/interior2.jpg`, span: 2 },
  { label: "Dining Room", src: `${IMG}/kitchen2.jpg`, span: 1 },
  { label: "Powder Room", src: `${IMG}/kitchen3.jpg`, span: 1 },
];

const testimonials = [
  {
    text: "Diane searches for the best quality and the best value. Our kitchen remodel exceeded every expectation. She has an incredible eye for detail and made the entire process feel effortless.",
    name: "Sarah M.",
    location: "Shadyside",
  },
  {
    text: "The VIP Experience was worth every penny. We learned so much about our own style, and Diane completely transformed our living room. It feels like a different house.",
    name: "James & Linda K.",
    location: "Squirrel Hill",
  },
  {
    text: "From the first consultation to the final reveal, everything was organized, professional, and original. Diane and Michael truly care about delivering something special.",
    name: "Patricia W.",
    location: "East Liberty",
  },
];

export default function InspirationalDesigns() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF8F5" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');`,
        }}
      />

      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "100vh", backgroundColor: "#FAF8F5" }}
      >
        <img
          src={`${IMG}/logo.png`}
          alt="Inspirational Designs logo"
          className="mb-10"
          style={{ height: 72, width: "auto", objectFit: "contain" }}
        />
        <p
          className="tracking-[0.35em] uppercase text-xs mb-8"
          style={{ color: "#8B8178", fontFamily: "'Playfair Display', serif" }}
        >
          East Liberty, Pittsburgh
        </p>
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-medium leading-[1.05] mb-6"
          style={{ color: "#2A2A2A", fontFamily: "'Playfair Display', serif", maxWidth: "900px" }}
        >
          Inspirational
          <br />
          Designs
        </h1>
        <div
          className="w-16 mx-auto mb-6"
          style={{ height: "1px", backgroundColor: "#C4918A" }}
        />
        <p
          className="text-xl sm:text-2xl italic mb-16"
          style={{ color: "#8B8178", fontFamily: "'Playfair Display', serif" }}
        >
          We are an experience
        </p>
        <a
          href="#work"
          className="inline-flex flex-col items-center gap-2 transition-opacity hover:opacity-60"
          style={{ color: "#C4918A" }}
        >
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            View Our Work
          </span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </section>

      {/* The Experience */}
      <section className="py-28 px-6" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="tracking-[0.3em] uppercase text-xs mb-4" style={{ color: "#C4918A" }}>
            Our Process
          </p>
          <h2
            className="text-4xl sm:text-5xl font-medium mb-20"
            style={{ color: "#2A2A2A", fontFamily: "'Playfair Display', serif" }}
          >
            The Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {[
              {
                num: "01",
                title: "Consultation",
                desc: "We begin with a personal conversation about your space, your lifestyle, and your vision. Every great transformation starts with listening.",
              },
              {
                num: "02",
                title: "Design",
                desc: "Material selection, space planning, color consultation, and procurement. We curate every detail with intention and care.",
              },
              {
                num: "03",
                title: "Reveal",
                desc: "The moment it all comes together. We walk you through your transformed space and ensure every element exceeds your expectations.",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <p
                  className="text-5xl font-light mb-4"
                  style={{ color: "#C4918A", fontFamily: "'Playfair Display', serif" }}
                >
                  {step.num}
                </p>
                <h3
                  className="text-xl font-medium mb-3"
                  style={{ color: "#2A2A2A", fontFamily: "'Playfair Display', serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8B8178" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Our Work */}
      <section id="work" className="py-28 px-6" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="tracking-[0.3em] uppercase text-xs mb-4" style={{ color: "#C4918A" }}>
              Portfolio
            </p>
            <h2
              className="text-4xl sm:text-5xl font-medium"
              style={{ color: "#2A2A2A", fontFamily: "'Playfair Display', serif" }}
            >
              Our Work
            </h2>
          </div>

          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "220px" }}
          >
            {projects.map((project, i) => (
              <div
                key={i}
                className="relative rounded-sm overflow-hidden group"
                style={{ gridColumn: `span ${project.span}` }}
              >
                <img
                  src={project.src}
                  alt={project.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(42,42,42,0.55) 0%, transparent 50%)",
                  }}
                />
                <span
                  className="absolute bottom-4 left-5 text-sm font-medium text-white drop-shadow-sm"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {project.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + BBB Badge */}
      <section className="py-24 px-6" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="w-12 mx-auto mb-16"
            style={{ height: "1px", backgroundColor: "#C4918A" }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center items-center">
            <div>
              <p
                className="text-5xl sm:text-6xl font-light mb-2"
                style={{ color: "#2A2A2A", fontFamily: "'Playfair Display', serif" }}
              >
                84+
              </p>
              <p className="text-sm tracking-[0.2em] uppercase" style={{ color: "#8B8178" }}>
                Projects Completed
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={`${IMG}/bbb.png`}
                alt="BBB A+ Rating"
                style={{ height: 64, width: "auto", objectFit: "contain" }}
                className="mb-2"
              />
              <p className="text-sm tracking-[0.2em] uppercase" style={{ color: "#8B8178" }}>
                BBB A+ Accredited
              </p>
            </div>
            <div>
              <p
                className="text-5xl sm:text-6xl font-light mb-2 flex items-center justify-center gap-1"
                style={{ color: "#2A2A2A", fontFamily: "'Playfair Display', serif" }}
              >
                <MapPin className="w-7 h-7" style={{ color: "#C4918A" }} />
              </p>
              <p className="text-sm tracking-[0.2em] uppercase" style={{ color: "#8B8178" }}>
                East Liberty Studio
              </p>
            </div>
          </div>
          <div
            className="w-12 mx-auto mt-16"
            style={{ height: "1px", backgroundColor: "#C4918A" }}
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-28 px-6" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="tracking-[0.3em] uppercase text-xs mb-4" style={{ color: "#C4918A" }}>
            What We Do
          </p>
          <h2
            className="text-4xl sm:text-5xl font-medium mb-16"
            style={{ color: "#2A2A2A", fontFamily: "'Playfair Display', serif" }}
          >
            Design Services
          </h2>
          <div className="space-y-6">
            {[
              "Kitchen Design & Remodeling",
              "Bathroom Design & Renovation",
              "Full-Home Interior Staging",
              "VIP Styling Experience",
              "Design Consultations",
              "Space Planning & Material Selection",
            ].map((service, i) => (
              <div key={i}>
                <p
                  className="text-lg sm:text-xl"
                  style={{ color: "#2A2A2A", fontFamily: "'Playfair Display', serif" }}
                >
                  {service}
                </p>
                {i < 5 && (
                  <div
                    className="w-8 mx-auto mt-6"
                    style={{ height: "1px", backgroundColor: "#E8D5CE" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <p className="tracking-[0.3em] uppercase text-xs mb-4" style={{ color: "#C4918A" }}>
              Kind Words
            </p>
            <h2
              className="text-4xl sm:text-5xl font-medium"
              style={{ color: "#2A2A2A", fontFamily: "'Playfair Display', serif" }}
            >
              Client Stories
            </h2>
          </div>

          <div className="space-y-0">
            {testimonials.map((t, i) => (
              <div key={i}>
                <div className="w-full my-0" style={{ height: "1px", backgroundColor: "#E8D5CE" }} />
                <div className="py-12 text-center">
                  <Quote className="w-6 h-6 mx-auto mb-6" style={{ color: "#C4918A" }} />
                  <p
                    className="text-lg sm:text-xl italic leading-relaxed mb-6"
                    style={{ color: "#2A2A2A", fontFamily: "'Playfair Display', serif" }}
                  >
                    {t.text}
                  </p>
                  <p className="text-sm" style={{ color: "#8B8178" }}>
                    {t.name} &mdash; {t.location}
                  </p>
                </div>
              </div>
            ))}
            <div className="w-full" style={{ height: "1px", backgroundColor: "#E8D5CE" }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-medium mb-4"
            style={{ color: "#2A2A2A", fontFamily: "'Playfair Display', serif" }}
          >
            Ready for Your Transformation?
          </h2>
          <p className="text-sm leading-relaxed mb-10" style={{ color: "#8B8178" }}>
            Every beautiful space begins with a conversation. Reach out to schedule your
            personal design consultation at our East Liberty studio.
          </p>
          <a
            href="mailto:Inspirational_Designs@comcast.net"
            className="inline-block px-10 py-3.5 text-sm tracking-[0.15em] uppercase transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "#C4918A",
              color: "#FFFFFF",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Book a Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-8"
        style={{ backgroundColor: "#FAF8F5", borderTop: "1px solid #E8D5CE" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={`${IMG}/logo.png`}
              alt="Inspirational Designs"
              style={{ height: 28, width: "auto", objectFit: "contain" }}
            />
            <p
              className="text-sm"
              style={{ color: "#8B8178", fontFamily: "'Playfair Display', serif" }}
            >
              Inspirational Designs &middot; Est. 2007
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs" style={{ color: "#8B8178" }}>
            <span>East Liberty, Pittsburgh, PA</span>
            <span>&middot;</span>
            <a
              href="mailto:Inspirational_Designs@comcast.net"
              className="transition-opacity hover:opacity-60"
            >
              Inspirational_Designs@comcast.net
            </a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-6 pt-4 text-center" style={{ borderTop: "1px solid #E8D5CE" }}>
          <p className="text-xs" style={{ color: "#8B8178" }}>
            Website by{" "}
            <a href="/" className="underline transition-opacity hover:opacity-60">
              KPT Designs
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
