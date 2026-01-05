import Image from "next/image"
import Link from "next/link"
import { AuraHeroSection } from "@/components/ui/aura-hero"
import { Footer } from "@/components/footer"
import { ArrowRight, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AuraHeroSection />

      {/* Philosophy Section */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/luxury-interior-with-artificial-floral-installatio.jpg"
                alt="Philosophy Image"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-8 right-8 bg-background p-8 hidden md:block border max-w-xs">
                <p className="text-[10px] uppercase tracking-[0.2em] mb-3 text-muted-foreground">Since 2008</p>
                <p className="font-serif text-lg leading-relaxed">
                  "Nature is the ultimate architect. We are simply its dedicated students."
                </p>
              </div>
            </div>
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-[11px] uppercase tracking-[0.4em] text-primary font-bold">The Aura Ethos</span>
                <h2 className="font-serif text-4xl md:text-6xl leading-[1.2]">
                  Eighteen Years of <br />
                  <span className="italic">Botanical Excellence.</span>
                </h2>
              </div>
              <div className="space-y-8 text-lg text-muted-foreground font-light leading-loose max-w-xl">
                <p>
                  As a trusted partner for over 18 years, Aura collaborates with interior designers, architects, and
                  premium homeowners to bring refined artificial florals and green elements into everyday environments.
                </p>
                <p>
                  Our collections are meticulously selected for the warmth of home, lasting elegance, material realism,
                  and spatial harmony. We define luxury not just by appearance, but by the intention behind every stem.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold group"
              >
                Learn our untold story
                <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                  <ArrowRight size={14} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Value Propositions Section */}
      <section className="py-16 px-6 md:px-12 bg-background border-t border-b">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide">Trusted by designers & premium clients</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Recognized by interior professionals and homeowners who demand excellence
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide">Imported & curated botanical elements</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Carefully selected from global sources for quality and realism
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold tracking-wide">Comfort and style to feel like home</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Creating warmth and spatial harmony in every environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections Grid */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="max-w-screen-2xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">The Archive</span>
              <h2 className="font-serif text-4xl md:text-5xl">Curated Collections</h2>
            </div>
            <Link
              href="/collections"
              className="text-[11px] uppercase tracking-[0.2em] font-medium border-b border-foreground/20 hover:border-foreground transition-all pb-1"
            >
              View All Series
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Artificial Flowers",
                query: "minimal-botanical-arrangement-on-stone.jpg",
                count: "Blooms that defy the seasons",
              },
              {
                title: "Hanging Greenery",
                query: "large-artificial-floral-installation-wall.jpg",
                count: "Suspended elegance",
              },
              {
                title: "Signature Bonsai",
                query: "luxury-artificial-orchid-arrangement.jpg",
                count: "Miniature contemplation",
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={`/collections/${item.title.toLowerCase().replace(" ", "-")}`}
                className="group relative block aspect-[4/5] overflow-hidden"
              >
                <Image
                  src={`/${item.query}`}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 text-background translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] uppercase tracking-[0.2em] mb-1 opacity-80">{item.count}</p>
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Pieces Section (Bento Inspired) */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-foreground text-background overflow-hidden relative">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-12 relative z-10">
              <div className="space-y-6">
                <span className="text-[11px] uppercase tracking-[0.4em] text-accent font-bold">Aura Editions</span>
                <h2 className="font-serif text-4xl md:text-7xl leading-tight">
                  Signature <br />
                  <span className="italic">Botanicals</span>
                </h2>
              </div>
              <p className="text-lg opacity-70 leading-relaxed font-light max-w-md">
                Handpicked objects of desire. From ceramic gradient pots to large-scale floral installations, these are
                the pieces that define the Aura aesthetic.
              </p>
              <Link
                href="/signature"
                className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold group"
              >
                Shop the editions
                <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-all">
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-4 md:space-y-8 mt-12 md:mt-24">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image src="/ceramic-gradient-pot-minimal.jpg" alt="Editions" fill className="object-cover" />
                </div>
                <div className="aspect-square relative overflow-hidden">
                  <Image src="/luxury-artificial-orchid-arrangement.jpg" alt="Editions" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 md:space-y-8">
                <div className="aspect-square relative overflow-hidden">
                  <Image src="/minimal-handcrafted-console-table.jpg" alt="Editions" fill className="object-cover" />
                </div>
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/large-artificial-floral-installation-wall.jpg"
                    alt="Editions"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Decorative Text Background */}
        <div className="absolute -bottom-24 -right-12 text-[20vw] font-serif text-white/[0.03] leading-none pointer-events-none select-none">
          AURA
        </div>
      </section>

      {/* Wedding & Ceremonial Section */}
      <section className="py-32 px-6 md:px-12 bg-background border-t">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="font-serif text-4xl md:text-7xl leading-tight text-balance">
            Let's Design Something <span className="italic">Timeless</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-loose font-light max-w-2xl mx-auto">
            Whether it's a home, workspace, or commercial interior, Aura House of Flowers works closely to curate décor
            that feels intentional, refined, and enduring.
          </p>
          <p className="text-sm text-primary font-medium tracking-wide">Where nature meets considered design.</p>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/collections"
              className="px-12 py-5 bg-foreground text-background text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-foreground/90 transition-all"
            >
              Explore Collections
            </Link>
            <Link
              href="/contact"
              className="px-12 py-5 border border-foreground text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-foreground hover:text-background transition-all"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}



