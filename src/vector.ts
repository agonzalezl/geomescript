import { Point } from "./point";

export class Vector {
  constructor(public x: number, public y: number) {}

  static fromPoints(p1: Point, p2: Point): Vector {
    return new Vector(p2.x - p1.x, p2.y - p1.y);
  }

  magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize(): Vector {
    const mag = this.magnitude();
    return new Vector(this.x / mag, this.y / mag);
  }

  dot(other: Vector): number {
    return this.x * other.x + this.y * other.y;
  }

  subtract(other: Vector): Vector {
    return new Vector(this.x - other.x, this.y - other.y);
  }

  add(other: Vector): Vector {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  multiply(scalar: number): Vector {
    return new Vector(this.x * scalar, this.y * scalar);
  }
}
