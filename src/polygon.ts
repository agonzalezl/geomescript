import { Point } from "./point";
import { Segment } from "./segment";

export class Polygon {
  constructor(public points: Point[]) {
    this.points = points;
  }

  getSegments(): Segment[] {
    const segments: Segment[] = [];
    const numPoints = this.points.length;

    for (let i = 0; i < numPoints; i++) {
      const startPoint = this.points[i];
      const endPoint = this.points[(i + 1) % numPoints];

      const segment = new Segment(startPoint, endPoint);
      segments.push(segment);
    }

    return segments;
  }
}
