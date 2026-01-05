'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { SparklesCore } from '@/components/ui/sparkles'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function AuraHeroSection() {
    return (
        <main className="overflow-hidden bg-background">
            {/* Subtle background gradients matching Aura's aesthetic */}
            <div
                aria-hidden
                className="z-[2] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict hidden lg:block">
                <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,oklch(0.35_0.05_120_/_0.08)_0,oklch(0.35_0.05_120_/_0.02)_50%,transparent_80%)]" />
                <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,oklch(0.35_0.05_120_/_0.06)_0,oklch(0.35_0.05_120_/_0.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%at_50%_50%,oklch(0.35_0.05_120_/_0.04)_0,oklch(0.35_0.05_120_/_0.02)_80%,transparent_100%)]" />
            </div>

            <section>
                <div className="relative pt-24 md:pt-36">
                    {/* Sparkles background */}
                    <div className="absolute inset-0 w-full h-full -z-10">
                        <SparklesCore
                            id="aura-main-sparkles"
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={60}
                            className="w-full h-full"
                            particleColor="#8b9f8d"
                            speed={0.4}
                        />
                    </div>
                    
                    <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                    
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                            <AnimatedGroup variants={transitionVariants}>
                                <Link
                                    href="/collections"
                                    className="hover:bg-background bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border border-primary/10 p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300">
                                    <span className="text-foreground text-[11px] uppercase tracking-[0.3em] font-semibold">18 Years of Excellence</span>
                                    <span className="block h-4 w-0.5 border-l bg-primary/20"></span>

                                    <div className="bg-background group-hover:bg-primary/10 size-6 overflow-hidden rounded-full duration-500">
                                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                    
                              <h1 className="mt-8 max-w-4xl mx-auto font-serif text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] leading-[1.1]">
                                    Rooted in Design. <br />
                                    <span className="italic">Recognized</span> for Quality.
                                </h1>
                                <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground font-light leading-loose">
                                    Premium distributor of curated artificial floral décor and botanical elements for modern interiors. Where nature meets considered design.
                                </p>
                            </AnimatedGroup>

                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                <div
                                    key={1}
                                    className="bg-foreground/10 rounded-[14px] border border-primary/10 p-0.5">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="rounded-xl px-8 text-[11px] uppercase tracking-[0.3em] font-semibold bg-foreground text-background hover:bg-foreground/90">
                                        <Link href="/collections">
                                            <span className="text-nowrap">Explore Collections</span>
                                        </Link>
                                    </Button>
                                </div>
                                <Button
                                    key={2}
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="h-11 rounded-xl px-8 text-[11px] uppercase tracking-[0.3em] font-semibold">
                                    <Link href="/contact">
                                        <span className="text-nowrap">Book Appointment</span>
                                    </Link>
                                </Button>
                            </AnimatedGroup>
                        </div>
                    </div>

                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}>
                        <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                            <div
                                aria-hidden
                                className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                            />
                            <div className="inset-shadow-2xs ring-background bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-primary/10 p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                <div className="relative aspect-[15/8] w-full overflow-hidden rounded-2xl">
                                    <Image
                                        src="/luxury-interior-with-artificial-floral-installatio.jpg"
                                        alt="Aura House of Flowers - Premium Floral Installations"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </AnimatedGroup>
                </div>
            </section>
            
            {/* Trust section with elegant branding */}
            <section className="bg-background pb-16 pt-16 md:pb-32 border-t border-primary/10">
                <div className="group relative m-auto max-w-5xl px-6">
                    <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                        <Link
                            href="/about"
                            className="block text-sm duration-150 hover:opacity-75">
                            <span className="text-muted-foreground">Our Story</span>
                            <ChevronRight className="ml-1 inline-block size-3" />
                        </Link>
                    </div>
                    <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14 text-center">
                        <div className="flex flex-col items-center justify-center space-y-2">
                            <p className="font-serif text-4xl text-primary">18+</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Years</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                            <p className="font-serif text-4xl text-primary">500+</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Projects</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                            <p className="font-serif text-4xl text-primary">100%</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Premium</p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                            <p className="font-serif text-4xl text-primary">∞</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Elegance</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}


const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function AuraHeroSection() {
    return (
        <>
            <AuraHeader />
            <main className="overflow-hidden bg-background">
                {/* Subtle background gradients matching Aura's aesthetic */}
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-30 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,oklch(0.35_0.05_120_/_0.08)_0,oklch(0.35_0.05_120_/_0.02)_50%,transparent_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,oklch(0.35_0.05_120_/_0.06)_0,oklch(0.35_0.05_120_/_0.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%at_50%_50%,oklch(0.35_0.05_120_/_0.04)_0,oklch(0.35_0.05_120_/_0.02)_80%,transparent_100%)]" />
                </div>

                <section>
                    <div className="relative pt-24 md:pt-36">
                        {/* Sparkles background */}
                        <div className="absolute inset-0 w-full h-full -z-10">
                            <SparklesCore
                                id="aura-main-sparkles"
                                background="transparent"
                                minSize={0.4}
                                maxSize={1}
                                particleDensity={60}
                                className="w-full h-full"
                                particleColor="#8b9f8d"
                                speed={0.4}
                            />
                        </div>
                        
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="/collections"
                                        className="hover:bg-background bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border border-primary/10 p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300">
                                        <span className="text-foreground text-[11px] uppercase tracking-[0.3em] font-semibold">18 Years of Excellence</span>
                                        <span className="block h-4 w-0.5 border-l bg-primary/20"></span>

                                        <div className="bg-background group-hover:bg-primary/10 size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                        
                                  <h1 className="mt-8 max-w-4xl mx-auto font-serif text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] leading-[1.1]">
                                        Rooted in Design. <br />
                                        <span className="italic">Recognized</span> for Quality.
                                    </h1>
                                    <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground font-light leading-loose">
                                        Premium distributor of curated artificial floral décor and botanical elements for modern interiors. Where nature meets considered design.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[14px] border border-primary/10 p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-8 text-[11px] uppercase tracking-[0.3em] font-semibold bg-foreground text-background hover:bg-foreground/90">
                                            <Link href="/collections">
                                                <span className="text-nowrap">Explore Collections</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-11 rounded-xl px-8 text-[11px] uppercase tracking-[0.3em] font-semibold">
                                        <Link href="/contact">
                                            <span className="text-nowrap">Book Appointment</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-primary/10 p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <div className="relative aspect-[15/8] w-full overflow-hidden rounded-2xl">
                                        <Image
                                            src="/luxury-interior-with-artificial-floral-installatio.jpg"
                                            alt="Aura House of Flowers - Premium Floral Installations"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                
                {/* Trust section with elegant branding */}
                <section className="bg-background pb-16 pt-16 md:pb-32 border-t border-primary/10">
                    <div className="group relative m-auto max-w-5 xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/about"
                                className="block text-sm duration-150 hover:opacity-75">
                                <span className="text-muted-foreground">Our Story</span>
                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14 text-center">
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <p className="font-serif text-4xl text-primary">18+</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider">Years</p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <p className="font-serif text-4xl text-primary">500+</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider">Projects</p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <p className="font-serif text-4xl text-primary">100%</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider">Premium</p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <p className="font-serif text-4xl text-primary">∞</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider">Elegance</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Collections', href: '/collections' },
    { name: 'Signature', href: '/signature' },
    { name: 'Wedding', href: '/wedding' },
    { name: 'About', href: '/about' },
]

const AuraHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/80 max-w-4xl rounded-2xl border border-primary/10 backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-3">
                                <AuraLogo />
                                <span className="font-serif text-xl">Aura</span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-[11px] uppercase tracking-[0.2em]">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-foreground block duration-150 font-medium">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn('text-[11px] uppercase tracking-[0.2em]', isScrolled && 'lg:hidden')}>
                                    <Link href="/contact">
                                        <span>Contact</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn('text-[11px] uppercase tracking-[0.2em] bg-foreground text-background', isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="/collections">
                                        <span>Explore</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const AuraLogo = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('h-6 w-6', className)}>
            <path
                d="M12 2L4 7v10l8 5 8-5V7l-8-5z"
                stroke="url(#aura-gradient)"
                strokeWidth="2"
                strokeLinejoin="round"
                fill="none"
            />
            <circle cx="12" cy="12" r="4" fill="url(#aura-gradient)" opacity="0.3" />
            <defs>
                <linearGradient
                    id="aura-gradient"
                    x1="12"
                    y1="2"
                    x2="12"
                    y2="22"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="oklch(0.35 0.05 120)" />
                    <stop offset="1" stopColor="oklch(0.88 0.03 80)" />
                </linearGradient>
            </defs>
        </svg>
    )
}
