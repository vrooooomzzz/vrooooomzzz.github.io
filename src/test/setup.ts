import '@testing-library/jest-dom/vitest'

if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = () => undefined
}

if (!window.matchMedia) {
  window.matchMedia = () => ({
    matches: false,
    media: '',
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false,
  })
}

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (callback) => window.setTimeout(callback, 0)
  window.cancelAnimationFrame = (frameId) => window.clearTimeout(frameId)
}
