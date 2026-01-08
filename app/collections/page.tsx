import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { ChevronRight } from "lucide-react"

import { getItemsCount } from '@/app/actions'
import { type CollectionType } from '@/lib/item-types'
import { CATEGORIES } from '@/lib/collection-data'

export default async function CollectionsPage() {
  const categoriesWithCounts = await Promise.all(
    CATEGORIES.map(async (cat) => {
      const count = await getItemsCount(cat.slug as CollectionType)
      return {
        ...cat,
        count: `${count} Curated Pieces` // Update count string
      }
    })
  )

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">The Archive</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none">Collections</h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-lg">
              Curated artificial floral décor and botanical elements selected for warmth of home, lasting elegance,
              material realism, and spatial harmony.
            </p>
          </div>
        </div>
      </header>

      {/* Process / Flow Clarity Section */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-screen-2xl mx-auto border-y border-foreground/10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
               <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">01. Explore</span>
               <h3 className="font-serif text-2xl">Browse Collections</h3>
               <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-sm">
                  Navigate through our curated categories below. From faux botanicals to architectural trees.
               </p>
            </div>
            <div className="space-y-4">
               <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">02. Select</span>
               <h3 className="font-serif text-2xl">Choose & Inquire</h3>
               <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-sm">
                  Find the pieces that resonate with your space. Use the inquiry button or WhatsApp to check availability.
               </p>
            </div>
             <div className="space-y-4">
               <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">03. Curate</span>
               <h3 className="font-serif text-2xl">Style & Delivery</h3>
               <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-sm">
                  Our team assists with final styling advice. We package and deliver your selections with care.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="px-6 md:px-12 pb-48">
        <div className="max-w-screen-2xl mx-auto mb-16">
           <h2 className="font-serif text-3xl md:text-4xl text-primary">Explore Categories</h2>
           <div className="w-24 h-px bg-primary/20 mt-4" />
        </div>

        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border-y border-foreground/10">
          {categoriesWithCounts.map((category) => (
            <Link
              key={category.slug}
              href={`/collections/${category.slug}`}
              className="group relative bg-background p-8 md:p-12 lg:p-20 overflow-hidden hover:bg-primary/5 active:bg-primary/10 transition-colors duration-300"
            >
              <div className="relative z-10 space-y-8 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{category.count}</p>
                    <span className="text-[10px] text-muted-foreground">•</span>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {category.priceRange}
                    </p>
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl group-hover:italic group-active:italic transition-all duration-500">
                    {category.title}
                  </h2>
                  <p className="text-sm font-medium italic text-primary">{category.tagline}</p>
                  <p className="text-muted-foreground font-light leading-relaxed max-w-xs transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100 opacity-60">
                    {category.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold">
                  Explore Series <ChevronRight size={14} className="group-hover:translate-x-1 group-active:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1/3 md:w-1/2 opacity-20 md:opacity-10 lg:opacity-5 group-hover:opacity-100 group-active:opacity-80 transition-all duration-1000">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 group-active:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
