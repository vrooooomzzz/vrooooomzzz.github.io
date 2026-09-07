const REVEAL_DELAYS = ['delay-1', 'delay-2', 'delay-3'] as const

export const getAnimationDelayClass = (index: number): string =>
  REVEAL_DELAYS[index % REVEAL_DELAYS.length]
