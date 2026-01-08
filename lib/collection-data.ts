
export interface CollectionInfo {
  title: string
  slug: string
  image: string
  tagline: string
  description: string
  count: string // Display string like "48 Curated Pieces"
  priceRange: string
}

export const CATEGORIES: CollectionInfo[] = [
  {
    title: "Artificial Flowers",
    slug: "artificial-flowers",
    image: "/minimal-botanical-arrangement-on-stone.jpg",
    tagline: "Blooms that defy the seasons.",
    description:
      "High-quality artificial blooms designed to maintain their beauty year-round, bringing vibrant color and natural elegance to any space. Our selection ranges from delicate silk petals to robust, soft-touch polymers that mimic the finest real botanicals.",
    count: "48 Curated Pieces",
    priceRange: "",
  },
  {
    title: "Artificial Green Plants",
    slug: "artificial-green-plants",
    image: "/luxury-interior-with-artificial-floral-installatio.jpg",
    tagline: "Perpetual greenery without the demands.",
    description:
      "Maintenance-free botanical elements that provide the lush, refreshing look of real plants without watering, sunlight requirements, or upkeep. Perfect for low-light corners or high-traffic commercial spaces.",
    count: "36 Curated Pieces",
    priceRange: "",
  },
  {
    title: "Hanging Greenery",
    slug: "hanging-greenery",
    image: "/large-artificial-floral-installation-wall.jpg",
    tagline: "Suspended elegance for living spaces.",
    description:
      "Transform vertical spaces with our curated selection of artificial hanging plants and cascading botanical elements. Ideal for adding depth to shelves, pergolas, and ceiling installations.",
    count: "24 Curated Pieces",
    priceRange: "",
  },
  {
    title: "Bonsai",
    slug: "bonsai",
    image: "/luxury-artificial-orchid-arrangement.jpg",
    tagline: "Miniature contemplation in refined form.",
    description:
      "Artfully crafted artificial bonsai trees that capture the essence of this ancient art form. Each piece is a sculpture of patience and balance, perfect for executive desks and minimalist interiors.",
    count: "12 Limited Editions",
    priceRange: "",
  },
  {
    title: "Décor Accessories",
    slug: "decor-accessories",
    image: "/ceramic-gradient-pot-minimal.jpg",
    tagline: "Refined touches that complete the narrative.",
    description:
      "Complement your botanical collection with premium décor accessories. From handcrafted ceramic vessels to architectural stands, these pieces are designed to elevate your interior styling.",
    count: "Custom Selection",
    priceRange: "",
  },
]
