import { describe, it, expect } from 'vitest'
import { cn } from './cn'

describe('cn utility', () => {
  it('combines string classnames correctly', () => {
    expect(cn('px-4', 'py-2')).toBe('px-4 py-2')
  })

  it('handles conditional classnames', () => {
    const isPrimary = true
    const isSmall = false
    expect(cn('btn', isPrimary && 'btn-primary', isSmall && 'btn-sm')).toBe('btn btn-primary')
  })

  it('resolves tailwind collisions in favor of later classes', () => {
    expect(cn('p-4', 'p-6')).toBe('p-6')
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500')
  })
})

