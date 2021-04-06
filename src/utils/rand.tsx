export function xmur3(seed: string): () => number {
  for (var i = 0, h = 1779033703 ^ seed.length; i < seed.length; i++)
    (h = Math.imul(h ^ seed.charCodeAt(i), 3432918353)),
      (h = (h << 13) | (h >>> 19))
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    return (h ^= h >>> 16) >>> 0
  }
}

export function mulberry32(seed: number) {
  return function () {
    var t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function randomGenerator(seed?: string): () => number {
  if (!seed) {
    return mulberry32(Date.now())
  }

  const seedGen = xmur3(seed)
  return mulberry32(seedGen())
}
