export class Point {
  constructor(public x: number, public y: number) {}

  distanceTo(other: Point): number {
    const dx = other.x - this.x;
    const dy = other.y - this.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
