'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X, Instagram, Sparkles, Home, Layers, PenTool, Heart, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'Signature', href: '/signature' },
    { name: 'Wedding', href: '/wedding' },
    { name: 'About', href: '/about' },
]

export function AuraNavbar() {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Don't render the public navbar on admin pages
    if (pathname?.startsWith('/admin')) {
        return null
    }
    
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-50 w-full px-0 lg:px-2 group">
                <div className={cn('mx-auto lg:mt-2 max-w-6xl transition-all duration-300 px-4 lg:px-12 bg-background/70 backdrop-blur-md lg:rounded-2xl border-b lg:border border-primary/10', isScrolled && 'bg-background/95 lg:max-w-4xl backdrop-blur-xl lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-0 lg:gap-0 lg:py-0">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-3">
                                <Image 
                                    src="/logo.png" 
                                    alt="Aura House of Flowers" 
                                    width={180} 
                                    height={65} 
                                    className="h-16 w-auto object-contain drop-shadow-md"
                                />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-50 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className={cn("m-auto size-6 duration-200", menuState ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100")} />
                                <X className={cn("absolute inset-0 m-auto size-6 duration-200", menuState ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0")} />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-10 text-[11px] uppercase tracking-[0.2em] font-medium">
                                {menuItems.map((item, index) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                prefetch={true}
                                                className={cn(
                                                    "relative group block transition-colors duration-300",
                                                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                                )}
                                            >
                                                <span>{item.name}</span>
                                                <span className={cn(
                                                    "absolute -bottom-1 left-1/2 w-0 h-[1px] bg-primary transition-all duration-300 ease-out group-hover:w-full group-hover:left-0",
                                                    isActive && "w-full left-0"
                                                )} />
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="hidden lg:flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
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
            </nav>

            <AnimatePresence>
                {menuState && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-background/80 lg:hidden"
                            onClick={() => setMenuState(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="fixed top-0 right-0 z-40 h-screen w-[85%] max-w-sm bg-background border-l border-border lg:hidden overflow-hidden"
                        >
                            
                            <div className="relative flex flex-col h-full p-8 pt-28">
                                {/* Navigation Links */}
                                <nav className="flex-1 space-y-2">
                                    {menuItems.map((item, index) => {
                                        const isActive = pathname === item.href
                                        const icons = [Home, Layers, Sparkles, Heart, Info]
                                        const Icon = icons[index]
                                        
                                        return (
                                            <div key={index}>
                                                <Link
                                                    href={item.href}
                                                    prefetch={true}
                                                    onClick={() => setMenuState(false)}
                                                    className={cn(
                                                        "group relative flex items-center gap-5 px-4 py-4 rounded-xl transition-all duration-300 overflow-hidden",
                                                        isActive 
                                                            ? "text-primary bg-primary/5 border border-primary/10" 
                                                            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                                                    )}
                                                >
                                                    <div className={cn(
                                                        "relative z-10 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
                                                        isActive 
                                                            ? "bg-primary/10 text-primary" 
                                                            : "bg-transparent text-muted-foreground group-hover:text-primary group-hover:bg-primary/5"
                                                    )}>
                                                        <Icon className="w-4 h-4" />
                                                    </div>
                                                    
                                                    <span className={cn(
                                                        "relative z-10 text-sm tracking-[0.1em] uppercase font-medium transition-colors duration-300",
                                                        isActive ? "font-semibold" : ""
                                                    )}>
                                                        {item.name}
                                                    </span>

                                                    {/* Elegant Active Indicator - Static */}
                                                    {isActive && (
                                                        <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-primary" />
                                                    )}
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </nav>

                                {/* Bottom Actions */}
                                <div className="space-y-6 pt-8 mt-auto">
                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
                                    
                                    {/* Primary CTA */}
                                    <Button
                                        asChild
                                        className="w-full justify-between gap-3 h-14 rounded-xl text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300"
                                    >
                                        <Link href="/contact">
                                            <span className="pl-2">Book Consultation</span>
                                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                                <PenTool className="w-3.5 h-3.5" />
                                            </div>
                                        </Link>
                                    </Button>

                                    {/* Social Link - Minimalist */}
                                    <Link 
                                        href="https://www.instagram.com/aurahouseofflowers/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between group py-2"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/30 text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                                <Instagram className="w-4 h-4" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Follow Our Journey</span>
                                                <span className="text-xs font-medium group-hover:text-primary transition-colors">@aurahouseofflowers</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}
