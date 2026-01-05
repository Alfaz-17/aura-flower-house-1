import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Plus } from "lucide-react"

const signatureItems = [
  {
    id: 1,
    name: "Console Table",
    category: "Furniture Edition",
    price: "On Request",
    tagline: "A minimalist statement piece that brings warmth and natural elegance to any interior.",
    description:
      "Round wooden table with black legs and brass tips. Handcrafted wood with premium finishes, designed to anchor your botanical arrangements in refined style.",
    image: "/minimal-handcrafted-console-table.jpg",
    details: "Handcrafted wood with premium finishes.",
  },
  {
    id: 2,
    name: "Ceramic Gradient Pots",
    category: "Vase Edition",
    price: "$450 – $890",
    tagline: "Each pot is a functional art piece for contemporary living spaces.",
    description:
      "Tall artistic vessels with premium gradient glaze from rich amber to deep charcoal. Museum-grade finish that elevates any botanical arrangement into a sculptural moment.",
    image: "/ceramic-gradient-pot-minimal.jpg",
    details: "Handcrafted ceramic with museum-grade finish.",
  },
]

export default function SignaturePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Narrative Header */}
      <section className="pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-8">
            <span className="text-[11px] uppercase tracking-[0.4em] text-primary font-bold">Limited Series</span>
            <h1 className="font-serif text-5xl md:text-8xl leading-none">
              Signature <br />
              <span className="italic">Pieces</span>
            </h1>
          </div>
          <div className="max-w-md space-y-6">
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Objects of intentionality. Our Signature Collection represents the pinnacle of Aura curation—pieces that
              transcend simple décor to become architectural landmarks within a space.
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">
              Handcrafted elements selected for their material integrity and spatial presence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Showcase */}
      <section className="px-6 md:px-12 pb-48">
        <div className="max-w-screen-2xl mx-auto space-y-32">
          {signatureItems.map((item, idx) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`lg:col-span-7 relative aspect-[4/5] overflow-hidden group ${
                  idx % 2 === 1 ? "lg:order-last" : ""
                }`}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
                <button className="absolute bottom-12 right-12 w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-xl translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <Plus size={24} strokeWidth={1} />
                </button>
              </div>

              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{item.category}</p>
                  <h2 className="font-serif text-4xl md:text-6xl">{item.name}</h2>
                  <p className="font-serif text-2xl italic text-muted-foreground">{item.price}</p>
                </div>
                <div className="space-y-4">
                  <p className="text-base font-medium italic text-foreground">{item.tagline}</p>
                  <p className="text-lg text-muted-foreground font-light leading-loose max-w-sm">{item.description}</p>
                  <p className="text-sm text-muted-foreground/70 font-light border-l-2 border-primary pl-4">
                    {item.details}
                  </p>
                </div>
                <div className="pt-4">
                  <button className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold group">
                    Inquire about this piece
                    <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                      <ArrowRight size={14} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
