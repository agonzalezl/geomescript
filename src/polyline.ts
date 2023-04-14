import { Segment } from "./segment";
import { Point } from "./point";

export class Polyline {
  constructor(public segments: Segment[]) {}

  static fromPoints(points: Point[]): Polyline {
    if (points.length === 1) {
      throw new Error("Polylines require atleast 2 points");
    }

    let segments = [];

    for (let i = 0; i < points.length - 1; i++) {
      segments.push(new Segment(points[i], points[i + 1]));
    }
    return new Polyline(segments);
  }
}
