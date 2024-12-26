export function regularPolygon(
  centerX: number,
  centerY: number,
  r: number,
  phi: number,
  vertexCount: number,
): [number, number][] {
  const points: [number, number][] = new Array(vertexCount)

  for (let i = 0; i < vertexCount; i++) {
    const x = centerX + r * Math.cos(phi + 2 * Math.PI * i / vertexCount)
    const y = centerY + r * Math.sin(phi + 2 * Math.PI * i / vertexCount)
    points[i] = [x, y]
  }

  return points
}
