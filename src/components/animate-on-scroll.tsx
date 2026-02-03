"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  distance?: number
}

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 30,
}: AnimateOnScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const variants = {
    up: {
      initial: { opacity: 0, y: distance },
      animate: { opacity: 1, y: 0 },
    },
    down: {
      initial: { opacity: 0, y: -distance },
      animate: { opacity: 1, y: 0 },
    },
    left: {
      initial: { opacity: 0, x: distance },
      animate: { opacity: 1, x: 0 },
    },
    right: {
      initial: { opacity: 0, x: -distance },
      animate: { opacity: 1, x: 0 },
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
  }

  const selectedVariant = variants[direction]

  return (
    <motion.div
      ref={ref}
      initial={selectedVariant.initial}
      animate={isInView ? selectedVariant.animate : selectedVariant.initial}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

