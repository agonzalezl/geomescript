import { Point } from "./point";
import { Vector } from "./vector";

export class Segment {
  constructor(public start: Point, public end: Point) {}

  static from(origin: Point, vector: Vector): Segment {
    const end = origin.translate(vector);
    return new Segment(origin, end);
  }

  toVector(): Vector {
    return Vector.fromPoints(this.start, this.end);
  }

  length(): number {
    return this.start.distanceTo(this.end);
  }

  crossingPoint(other: Segment): Point | undefined {
    const denominator =
      (other.end.y - other.start.y) * (this.end.x - this.start.x) -
      (other.end.x - other.start.x) * (this.end.y - this.start.y);

    if (denominator === 0) {
      // Segments are parallel, no crossing point
      return undefined;
    }

    const ua =
      ((other.end.x - other.start.x) * (this.start.y - other.start.y) -
        (other.end.y - other.start.y) * (this.start.x - other.start.x)) /
      denominator;
    const ub =
      ((this.end.x - this.start.x) * (this.start.y - other.start.y) -
        (this.end.y - this.start.y) * (this.start.x - other.start.x)) /
      denominator;

    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
      // Crossing point is outside of both segments
      return undefined;
    }

    // Calculate and return the crossing point
    const x = this.start.x + ua * (this.end.x - this.start.x);
    const y = this.start.y + ua * (this.end.y - this.start.y);
    return new Point(x, y);
  }
}
