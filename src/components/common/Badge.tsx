import React from 'react'
import { cn } from '@/utils/cn'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'teal' | 'sky' | 'emerald' | 'amber' | 'neutral'
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'teal',
  children,
  ...props
}) => {
  const variantStyles = {
    teal: 'bg-teal-50 text-teal-800 border-teal-200',
    sky: 'bg-sky-50 text-sky-800 border-sky-200',
    emerald: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    amber: 'bg-amber-50 text-amber-800 border-amber-200',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
  }[variant]

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border tracking-wide uppercase',
        variantStyles,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

