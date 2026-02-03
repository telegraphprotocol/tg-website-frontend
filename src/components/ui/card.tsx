import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group flex flex-col justify-between rounded-[24px] border border-border/70 bg-card p-4 drop-shadow-sm transition-all duration-200",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }

