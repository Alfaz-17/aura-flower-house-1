import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Users, Instagram } from "lucide-react"
import Link from "next/link"

export default function WeddingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/large-artificial-floral-installation-wall.jpg"
          alt="Wedding Ceremony"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-background space-y-6 px-6">
          <span className="text-[11px] uppercase tracking-[0.5em] font-bold">Wedding & Ceremonial Décor</span>
          <h1 className="font-serif text-5xl md:text-8xl leading-none">
            Timeless <br />
            <span className="italic">Celebrations</span>
          </h1>
          <p className="text-lg opacity-90 font-light max-w-xl mx-auto">
            18 years of trust in creating unforgettable atmospheres
          </p>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-[11px] uppercase tracking-[0.4em] text-primary font-bold">Beyond Interiors</span>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.2]">
                Ceremonial & Large-Scale <br />
                <span className="italic">Floral Décor</span>
              </h2>
            </div>
            <div className="space-y-8 text-lg text-muted-foreground font-light leading-loose max-w-xl">
              <p>
                Beyond interiors, ceremonial and large-scale floral décor is managed through our dedicated décor team.
                From intimate gatherings to grand celebrations, we create immersive botanical environments that elevate
                every moment.
              </p>
              <p>
                Our curated artificial floral installations provide architectural precision and unwavering beauty that
                remains perfect throughout your entire celebration—no wilting, no water damage, just consistent
                elegance.
              </p>
            </div>
          </div>
          <div className="relative aspect-square bg-foreground/5 overflow-hidden">
            <Image
              src="/luxury-artificial-orchid-arrangement.jpg"
              alt="Bridal Details"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      {/* Gujarat Florist Partnership Section */}
      <section className="py-24 px-6 md:px-12 bg-background border-y">
        <div className="max-w-screen-xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">Our Ceremonial Team</span>
            <h2 className="font-serif text-4xl md:text-6xl">Gujarat Florist</h2>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
              Ceremonial & Wedding Décor Specialist
            </p>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-loose max-w-2xl mx-auto">
            Ceremonial and large-scale floral designs created to elevate every moment of celebration, from intimate
            gatherings to grand celebrations.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="https://www.instagram.com/gujarat_florist"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 border border-foreground text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-foreground hover:text-background transition-all"
            >
              <Instagram size={16} strokeWidth={1.5} />
              @gujarat_florist
            </Link>
            <Link
              href="tel:+919737828614"
              className="text-[11px] uppercase tracking-[0.3em] font-semibold flex items-center gap-2 group border-b border-transparent hover:border-foreground transition-all py-1"
            >
              Call +91 9737828614
            </Link>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16 text-center space-y-4">
            <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">What We Offer</span>
            <h2 className="font-serif text-4xl md:text-5xl">Comprehensive Event Design</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Ceremony Installations",
                description:
                  "Arches, altar arrangements, aisle florals, and backdrops designed to frame your most important moments.",
              },
              {
                title: "Reception Décor",
                description:
                  "Centerpieces, hanging installations, statement bars, and ambient greenery to transform any venue.",
              },
              {
                title: "Bridal Party Florals",
                description:
                  "Bouquets, boutonnieres, corsages, and floral accessories crafted with meticulous attention to detail.",
              },
            ].map((service, idx) => (
              <div key={idx} className="space-y-4">
                <span className="font-serif text-3xl italic opacity-20">0{idx + 1}</span>
                <h3 className="font-serif text-2xl">{service.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Gallery */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-screen-2xl mx-auto space-y-24">
          <div className="text-center space-y-4">
            <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">Recent Works</span>
            <h2 className="font-serif text-4xl md:text-5xl italic">Event Portfolios</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Grand Wedding Celebration",
                location: "Bhavnagar, Gujarat",
                date: "December 2025",
                image: "/luxury-interior-with-artificial-floral-installatio.jpg",
                tags: ["Wedding", "500+ Guests"],
                description:
                  "A monumental celebration featuring cascading floral installations, traditional mandap décor, and immersive botanical environments throughout the venue.",
              },
              {
                title: "Intimate Garden Ceremony",
                location: "Ahmedabad, Gujarat",
                date: "October 2025",
                image: "/minimal-botanical-arrangement-on-stone.jpg",
                tags: ["Ceremony", "150 Guests"],
                description:
                  "Clean lines and elegant white florals designed to complement the natural beauty of the garden setting while maintaining sophistication.",
              },
            ].map((event, idx) => (
              <div key={idx} className="group cursor-pointer space-y-8">
                <div className="aspect-[16/9] relative overflow-hidden bg-foreground/5">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-[0.1em] border border-foreground/10 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl">{event.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{event.description}</p>
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground pt-2">
                    <span className="flex items-center gap-2">
                      <MapPin size={10} /> {event.location}
                    </span>
                    <span>•</span>
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <span className="text-[11px] uppercase tracking-[0.4em] text-accent font-bold">Start Your Inquiry</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Tell us about <br />
                <span className="italic">your vision.</span>
              </h2>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Calendar className="mt-1 opacity-50" size={18} strokeWidth={1} />
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold">Booking Horizon</p>
                  <p className="text-sm font-light opacity-70">
                    We recommend inquiring 6-12 months in advance for full-service events.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="mt-1 opacity-50" size={18} strokeWidth={1} />
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold">Consultation Process</p>
                  <p className="text-sm font-light opacity-70">
                    Initial consultation available in-person at our Bhavnagar studio or via virtual meeting.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 opacity-50" size={18} strokeWidth={1} />
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold">Service Area</p>
                  <p className="text-sm font-light opacity-70">
                    Based in Bhavnagar, Gujarat. Serving all of Gujarat and select destinations across India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] opacity-50">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-background/20 py-2 focus:outline-none focus:border-accent transition-colors font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] opacity-50">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-background/20 py-2 focus:outline-none focus:border-accent transition-colors font-light"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] opacity-50">Event Date *</label>
                  <input
                    type="date"
                    required
                    className="w-full bg-transparent border-b border-background/20 py-2 focus:outline-none focus:border-accent transition-colors font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] opacity-50">Venue Location *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-background/20 py-2 focus:outline-none focus:border-accent transition-colors font-light"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-50">Guest Count (Approx.)</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-background/20 py-2 focus:outline-none focus:border-accent transition-colors font-light"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-50">Vision & Scope *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your aesthetic preferences, venue style, and any specific botanical elements you envision..."
                  className="w-full bg-transparent border-b border-background/20 py-2 focus:outline-none focus:border-accent transition-colors font-light resize-none placeholder:opacity-30"
                />
              </div>
              <button className="w-full py-5 bg-background text-foreground text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-accent hover:text-foreground transition-all">
                Submit Inquiry
              </button>
              <p className="text-[9px] uppercase tracking-[0.1em] opacity-50 text-center">
                * Required fields. We typically respond within 48 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
