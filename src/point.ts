import { Vector } from "./vector";
export class Point {
  constructor(public x: number, public y: number) {}

  distanceTo(other: Point): number {
    const dx = other.x - this.x;
    const dy = other.y - this.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  translate(dx?: number, dy?: number): Point;
  translate(vector: Vector): Point;

  translate(arg1?: number | Vector, arg2?: number): Point {
    if (arg1 instanceof Vector) {
      const vector = arg1;
      return new Point(this.x + vector.x, (this.y += vector.y));
    } else {
      const dx = arg1 ?? 0;
      const dy = arg2 ?? 0;
      return new Point(this.x + dx, (this.y += dy));
    }
  }
}
