import Image from "next/image";

const services = [
  {
    name: "Signature Cut & Finish",
    description:
      "Tailored precision cut, nourishing cleanse, and a luxe blowout for a flawless finish.",
    duration: "60 min",
    price: "$85",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102d9eb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Dimensional Color",
    description:
      "Multi-tonal color artistry with Olaplex treatment to keep every strand luminous and healthy.",
    duration: "120 min",
    price: "$185",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Revive Ritual",
    description:
      "Hydration masque, scalp massage, and restorative styling to bring tired hair back to life.",
    duration: "75 min",
    price: "$110",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Event Glam Styling",
    description:
      "Polished upstyles or soft waves paired with bespoke finishing touches for special occasions.",
    duration: "90 min",
    price: "$150",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
];

const stylists = [
  {
    name: "Amelia Hart",
    title: "Creative Director",
    bio: "Known for sculpting architectural cuts with effortless movement and Parisian flair.",
    specialties: ["Precision Cutting", "Textured Styling", "Editorial Looks"],
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Luca Marin",
    title: "Color Maestro",
    bio: "Transforms palettes with sunlit balayage and high-impact dimension for every skin tone.",
    specialties: ["Balayage", "Corrective Color", "Glossing"],
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Sera Nyx",
    title: "Texture Specialist",
    bio: "Celebrates natural curls with sculpting techniques and custom hydration rituals.",
    specialties: ["Curl Care", "Smoothing Treatments", "Protective Styling"],
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
];

const testimonials = [
  {
    quote:
      "I left with the most luminous balayage I've ever had. The care and artistry are unmatched.",
    name: "Elena Duarte",
    title: "Model & Entrepreneur",
  },
  {
    quote:
      "Every visit feels like a retreat. The team listens, advises, and somehow exceeds expectations each time.",
    name: "Sasha Bernard",
    title: "Creative Director",
  },
  {
    quote:
      "From check-in to finish, everything is curated. My curls have never been this defined.",
    name: "Zoe Chen",
    title: "Producer",
  },
];

const packages = [
  {
    title: "Luminous Refresh",
    price: "$165",
    description: "Signature cut, gloss treatment, and styling lesson tailored to your routine.",
    perks: ["Precision Cut", "Shine Enhancing Gloss", "45 min Styling Tutorial"],
  },
  {
    title: "City Lights Color",
    price: "$280",
    description: "Balayage artistry with bond repair and custom toning for modern luminosity.",
    perks: ["Balayage or Foilayage", "Olaplex Repair", "Custom Toning", "Blowout"],
    highlighted: true,
  },
  {
    title: "Red-Carpet Eve",
    price: "$320",
    description: "Upstyle design, hydration treatment, and express makeup finish for event-ready glamour.",
    perks: ["Hydration Ritual", "Customized Upstyle", "Mini Makeup Refresh"],
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519415943484-9fa7845e9cde?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521571997304-223e45ee2135?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-neutral-900">
      <header className="sticky top-0 z-40 mx-auto max-w-6xl px-6 pt-6">
        <nav className="flex items-center justify-between rounded-full border border-black/5 bg-white/90 px-6 py-4 shadow-lg shadow-black/5 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#c07a45] to-[#e7b891] text-white">
              <span className="text-xl font-semibold">LM</span>
            </div>
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Luminous Mane
              </span>
              <p className="text-lg font-semibold text-neutral-900">Salon Atelier</p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#services" className="transition hover:text-[#c07a45]">
              Services
            </a>
            <a href="#experience" className="transition hover:text-[#c07a45]">
              Experience
            </a>
            <a href="#team" className="transition hover:text-[#c07a45]">
              Artists
            </a>
            <a href="#packages" className="transition hover:text-[#c07a45]">
              Packages
            </a>
            <a href="#contact" className="transition hover:text-[#c07a45]">
              Contact
            </a>
          </div>
          <a
            href="#booking"
            className="hidden rounded-full bg-gradient-to-r from-[#c07a45] to-[#e0a062] px-5 py-2 text-sm font-semibold text-white drop-shadow md:inline-flex"
          >
            Book Now
          </a>
        </nav>
      </header>

      <main className="mx-auto mt-10 flex max-w-6xl flex-col gap-24 px-6 pb-24">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-neutral-900 text-white">
          <Image
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=80"
            alt="Hair stylist working in a salon"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="relative z-10 grid gap-8 px-10 py-24 md:grid-cols-[1.2fr_1fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#f3d7c2]">
                Hair Artistry Reimagined
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Illuminate your look with bespoke cuts, color, and care.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-neutral-100">
                Nestled in the heart of the city, Luminous Mane Salon blends couture technique with warm hospitality for a salon experience that feels like a private retreat.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#booking"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-black/30"
                >
                  Reserve an Appointment
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.3em] text-[#f3d7c2]">
                Hours
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-100">
                <li className="flex justify-between">
                  <span>Tuesday - Friday</span>
                  <span>9:00a - 7:00p</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00a - 4:00p</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday & Monday</span>
                  <span>By appointment</span>
                </li>
              </ul>
              <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm text-neutral-100">
                <p className="font-semibold text-white">SoHo Studio</p>
                <p>215 Mercer Street</p>
                <p>New York, NY</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="space-y-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#c07a45]">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Crafted rituals tailored to your texture and lifestyle.
              </h2>
            </div>
            <p className="max-w-2xl text-neutral-600">
              From transformative cuts to luminous color, each service begins with a detailed consultation, restorative scalp massage, and personalized at-home care recommendations.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.name}
                className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-lg shadow-black/5 transition duration-500 hover:-translate-y-1 hover:shadow-black/10"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 space-y-4">
                  <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-neutral-400">
                    <span>{service.duration}</span>
                    <span>{service.price}</span>
                  </div>
                  <h3 className="text-2xl font-semibold">{service.name}</h3>
                  <p className="text-neutral-600">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="grid gap-10 rounded-[2.5rem] border border-black/5 bg-white/80 p-10 shadow-xl shadow-black/5 md:grid-cols-[1.1fr_1fr]"
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[#c07a45]">
              Experience
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              A serene lounge, artisanal beverages, and impeccable detail at every touchpoint.
            </h2>
            <p className="text-neutral-700">
              Our atelier pairs European salon craft with spa-caliber indulgence. Enjoy a welcome aromatherapy ritual, curated playlists, and sustainably sourced products selected for your specific hair needs.
            </p>
            <ul className="grid gap-4 text-sm text-neutral-600 md:grid-cols-2">
              <li className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                <p className="font-semibold text-neutral-900">Sustainable Luxury</p>
                <p>Vegan, cruelty-free products with refillable options and climate-neutral operations.</p>
              </li>
              <li className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                <p className="font-semibold text-neutral-900">Tailored Rituals</p>
                <p>Every appointment begins with a consultation and scalp analysis to personalize treatment.</p>
              </li>
              <li className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                <p className="font-semibold text-neutral-900">Artisan Beverages</p>
                <p>Complimentary espresso, teas, and cold-pressed juices curated with local makers.</p>
              </li>
              <li className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                <p className="font-semibold text-neutral-900">Digital Lookbook</p>
                <p>Leave with a personalized styling guide and product regimen delivered to your inbox.</p>
              </li>
            </ul>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80"
                alt="Luxurious salon interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="team" className="space-y-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#c07a45]">Artists</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Meet the visionaries shaping luminous hair stories.
              </h2>
            </div>
            <p className="max-w-2xl text-neutral-600">
              Our collective brings editorial expertise, advanced certifications, and a passion for celebrating every texture.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {stylists.map((stylist) => (
              <article
                key={stylist.name}
                className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:shadow-black/10"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={stylist.image}
                    alt={stylist.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-neutral-900">
                      {stylist.name}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#c07a45]">
                      {stylist.title}
                    </p>
                  </div>
                  <p className="text-sm text-neutral-600">{stylist.bio}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-neutral-500">
                    {stylist.specialties.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-[#c07a45]/30 bg-[#f9efe5] px-3 py-1"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#c07a45]">
                Testimonials
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Loved by creatives, founders, and tastemakers.
              </h2>
            </div>
            <p className="max-w-2xl text-neutral-600">
              Discover why our guests trust Luminous Mane to deliver magazine-worthy hair with every visit.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex flex-col gap-4 rounded-3xl border border-black/5 bg-white p-8 shadow-lg shadow-black/5"
              >
                <p className="text-lg italic text-neutral-700">
                  “{testimonial.quote}”
                </p>
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                    {testimonial.title}
                  </p>
                </div>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="packages" className="space-y-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#c07a45]">
                Packages
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Curated combinations designed for every milestone moment.
              </h2>
            </div>
            <p className="max-w-2xl text-neutral-600">
              Elevate your look with signature bundles that marry premium services and take-home upgrades.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.title}
                className={`flex h-full flex-col gap-4 rounded-3xl border border-black/5 bg-white p-8 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:shadow-black/10 ${pkg.highlighted ? "border-[#c07a45]/60 bg-[#f9efe5]" : ""}`}
              >
                <p className="text-xs uppercase tracking-[0.4em] text-[#c07a45]">
                  {pkg.highlighted ? "Most Loved" : "Signature"}
                </p>
                <h3 className="text-2xl font-semibold text-neutral-900">{pkg.title}</h3>
                <p className="text-3xl font-semibold text-neutral-900">{pkg.price}</p>
                <p className="text-sm text-neutral-600">{pkg.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  {pkg.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#c07a45]/10 text-[#c07a45]">
                        ✓
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Reserve Package
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Salon Lookbook</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative h-64 overflow-hidden rounded-3xl"
              >
                <Image
                  src={image}
                  alt="Salon work and interiors"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        <section
          id="booking"
          className="grid gap-10 rounded-[2.5rem] border border-black/5 bg-white p-10 shadow-xl shadow-black/5 md:grid-cols-2"
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[#c07a45]">
              Request Appointment
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Tell us about your hair goals and we will curate the perfect session.
            </h2>
            <p className="text-neutral-600">
              Complete the form and our concierge will reach out within one business day to confirm availability, pair you with the ideal stylist, and prepare your personalized experience.
            </p>
            <div className="rounded-3xl bg-[#f9efe5] p-6 text-sm text-neutral-700">
              <p className="font-semibold text-neutral-900">Prefer to call?</p>
              <p>
                Chat with our concierge at
                <a className="ml-1 font-semibold text-[#c07a45]" href="tel:+12125551234">
                  (212) 555-1234
                </a>
                .
              </p>
            </div>
          </div>
          <form className="grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-neutral-700">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jordan Ellis"
                className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-[#c07a45] focus:shadow-md"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-neutral-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="hello@luminousmane.com"
                className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-[#c07a45] focus:shadow-md"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="service" className="text-sm font-medium text-neutral-700">
                Desired service
              </label>
              <select
                id="service"
                className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-[#c07a45] focus:shadow-md"
                defaultValue="Signature Cut"
              >
                {services.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="day" className="text-sm font-medium text-neutral-700">
                Preferred day
              </label>
              <input
                id="day"
                type="text"
                placeholder="Example: Friday afternoon"
                className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-[#c07a45] focus:shadow-md"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="notes" className="text-sm font-medium text-neutral-700">
                Tell us about your hair
              </label>
              <textarea
                id="notes"
                rows={4}
                placeholder="Share your hair history, inspiration, or questions."
                className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-[#c07a45] focus:shadow-md"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#c07a45] to-[#e0a062] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c07a45]/30 transition hover:-translate-y-0.5 hover:shadow-[#c07a45]/40"
            >
              Submit Request
            </button>
            <p className="text-xs text-neutral-500">
              By submitting, you consent to being contacted by Luminous Mane for appointment scheduling and updates.
            </p>
          </form>
        </section>

        <section id="contact" className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[#c07a45]">
              Visit Us
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Luminous Mane Salon Atelier
            </h2>
            <div className="grid gap-4 text-sm text-neutral-600 md:grid-cols-2">
              <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                <p className="font-semibold text-neutral-900">Studio</p>
                <p>215 Mercer Street</p>
                <p>New York, NY 10012</p>
                <p className="mt-3 text-neutral-500">Located above the Rose & Pine boutique.</p>
              </div>
              <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                <p className="font-semibold text-neutral-900">Concierge</p>
                <p>
                  <a className="text-[#c07a45]" href="tel:+12125551234">
                    (212) 555-1234
                  </a>
                </p>
                <p>
                  <a className="text-[#c07a45]" href="mailto:concierge@luminousmane.com">
                    concierge@luminousmane.com
                  </a>
                </p>
                <p className="mt-3 text-neutral-500">Complimentary valet & private suite options available.</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] border border-black/5 bg-white shadow-xl shadow-black/10">
            <iframe
              title="Salon location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7076911155237!2d-73.99973322351664!3d40.72849137394608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259907244114f%3A0x73e67a2f50e1399f!2sMercer%20St%2C%20New%20York%2C%20NY%2010012!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white/80 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-neutral-400">
              Luminous Mane
            </p>
            <p className="mt-3 text-2xl font-semibold text-neutral-900">
              Salon Atelier & Hair Spa
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
            <a href="#services" className="transition hover:text-[#c07a45]">
              Services
            </a>
            <a href="#team" className="transition hover:text-[#c07a45]">
              Our Artists
            </a>
            <a href="#packages" className="transition hover:text-[#c07a45]">
              Packages
            </a>
            <a href="#booking" className="transition hover:text-[#c07a45]">
              Book Now
            </a>
            <a href="#contact" className="transition hover:text-[#c07a45]">
              Contact
            </a>
          </div>
          <p className="text-xs text-neutral-400">© {new Date().getFullYear()} Luminous Mane Salon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
