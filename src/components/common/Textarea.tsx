import React, { useId } from 'react'
import { cn } from '@/utils/cn'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  helperText?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className, id: customId, required, ...props }, ref) => {
    const generatedId = useId()
    const textareaId = customId || generatedId
    const errorId = `${textareaId}-error`
    const helperId = `${textareaId}-helper`

    return (
      <div className="w-full">
        <label htmlFor={textareaId} className="block text-sm font-medium text-slate-700 mb-1.5">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={cn(
            'w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder:text-slate-400 transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-teal-700',
            error
              ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500'
              : 'border-slate-300 hover:border-slate-400',
            className,
          )}
          {...props}
        />
        {error ? (
          <p id={errorId} className="mt-1.5 text-xs text-rose-600 font-medium">
            {error}
          </p>
        ) : helperText ? (
          <p id={helperId} className="mt-1.5 text-xs text-slate-500">
            {helperText}
          </p>
        ) : null}
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'

