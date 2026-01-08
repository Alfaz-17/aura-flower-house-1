'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function AuraHeroSection() {

    return (
        <main className="relative bg-background overflow-hidden min-h-[95vh] flex items-center justify-center pt-32 pb-16 lg:pt-32 lg:pb-0">
             {/* Cinematic Background Elements */}
             <div className="absolute top-0 right-0 w-[60%] h-full bg-secondary/10 rounded-l-[150px] -z-10 hidden lg:block backdrop-blur-3xl" />
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                
                {/* Text Content - Staggered Reveal */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2
                            }
                        }
                    }}
                    className="space-y-10 lg:pr-12 text-center lg:text-left"
                >
                     <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}>
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-white/40 mb-8">
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                            </span>
                            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-primary">
                                Est. 2024 • Bhavnagar
                            </span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.15] text-primary tracking-tight">
                            🌸 Botanical elegance & <br/>
                            <span className="italic font-light text-foreground/90">timeless design</span>
                        </h1>
                     </motion.div>

                    <motion.p 
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
                        className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-lg mx-auto lg:mx-0"
                    >
                        Crafting serene spaces with nature's artistry
                    </motion.p>

                    <motion.p 
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
                        className="text-lg md:text-xl text-muted-foreground/80 font-light leading-relaxed max-w-lg mx-auto lg:mx-0 italic"
                    >
                        Where every bloom tells your story 
                    </motion.p>

                    <motion.div 
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
                        className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4"
                    >
                        <Button asChild size="lg" className="rounded-full h-16 px-10 bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 text-xs uppercase tracking-[0.2em] font-bold shadow-2xl shadow-primary/25 hover:scale-105 active:scale-100 transition-transform duration-300">
                            <Link href="/collections">
                                Shop Collections
                            </Link>
                        </Button>
                        <Link href="/contact" className="group flex items-center gap-3 text-primary font-semibold text-xs uppercase tracking-[0.2em] hover:opacity-70 active:opacity-50 transition-opacity">
                            <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-active:bg-primary/80 transition-all duration-300">
                                <ArrowRight size={14} className="ml-0.5" />
                            </div>
                            Visit Studio
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Visual Content - Cinematic Frame with Advanced Animations */}
                <motion.div 
                    suppressHydrationWarning
                    className="relative mt-12 lg:mt-0 perspective-container"
                >
                    <motion.div
                         style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
                         initial={{ opacity: 0, scale: 0.9 }}
                         animate={{ 
                             opacity: 1, 
                             scale: 1, 
                             rotateY: 0,
                         }}
                         transition={{ 
                             duration: 1.2, 
                             ease: "easeOut",
                         }}
                         className="relative w-full"
                    >
                    <div className="relative aspect-[4/5] md:aspect-[3.5/4] lg:aspect-[4/5] w-full max-w-xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-[8px] border-white ring-1 ring-black/5 group">
                        
                        {/* The Cinematic Image with Enhanced Zoom + Parallax */}
                        <motion.div 
                            className="relative w-full h-full overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        >
                             <Image
                                src="/main-refined.png" 
                                alt="Aura Flower Shop Storefront"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                quality={90}
                                className="object-cover"
                                priority
                            />
                            
                            {/* Animated Shimmer Effect - Desktop Only */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent hidden lg:block"
                                initial={{ x: "-100%" }}
                                animate={{ x: "200%" }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>

                        {/* Cinematic Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                        
                        {/* Glowing Border Effect on Hover - Desktop Only */}
                        <motion.div 
                            className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block"
                            style={{
                                boxShadow: "inset 0 0 40px rgba(255,255,255,0.3), 0 0 60px rgba(167,139,250,0.4)"
                            }}
                        />

                         {/* Floating Particles Effect - Desktop Only */}
                        <div className="absolute inset-0 pointer-events-none hidden lg:block" suppressHydrationWarning>
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    suppressHydrationWarning
                                    className="absolute w-2 h-2 bg-white/40 rounded-full blur-sm"
                                    style={{
                                        left: `${20 + i * 15}%`,
                                        top: `${30 + i * 10}%`
                                    }}
                                    animate={{
                                        y: [0, -100, 0],
                                        opacity: [0, 0.8, 0],
                                        scale: [0, 1.5, 0]
                                    }}
                                    transition={{
                                        duration: 3 + i * 0.5,
                                        repeat: Infinity,
                                        delay: i * 0.8,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>
                       
                    </div>
                    </motion.div>
                    
                    {/* Enhanced Abstract Floating Orbs - Desktop Only */}
                    <motion.div 
                        className="absolute -bottom-16 -right-16 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10 mix-blend-multiply hidden lg:block"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div 
                        className="absolute -top-16 -left-16 w-64 h-64 bg-secondary/30 rounded-full blur-[80px] -z-10 mix-blend-multiply hidden lg:block"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    />
                </motion.div>
            </div>
        </main>
    )
}
