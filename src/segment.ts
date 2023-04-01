import { Point } from "./point";
import { Vector } from "./vector";

export class Segment {
  constructor(public start: Point, public end: Point) {}

  toVector(): Vector {
    return Vector.fromPoints(this.start, this.end);
  }

  length(): number {
    return this.start.distanceTo(this.end);
  }
}
