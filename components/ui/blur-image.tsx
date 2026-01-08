'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function BlurImage({ className, alt, ...props }: ImageProps) {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className={cn("overflow-hidden bg-muted/20 relative", className)}>
      <Image
        {...props}
        alt={alt}
        className={cn(
          "duration-700 ease-in-out transition-all",
          isLoading
            ? "scale-110 blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0",
          className
        )}
        onLoad={() => setLoading(false)}
      />
    </div>
  )
}
