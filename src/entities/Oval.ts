import { Shape } from './Shape';
import { Point2D } from './points/Point2D';
import { OvalService } from '../services/OvalService';

export class Oval extends Shape {
  constructor(
    name: string,
    public readonly point1: Point2D,
    public readonly point2: Point2D
  ) {
    super(name);
  }

  getArea(): number {
    return OvalService.getArea(this);
  }

  getPerimeter(): number {
    return OvalService.getPerimeter(this);
  }

  isOval(): boolean {
    return this.point1.x !== this.point2.x && this.point1.y !== this.point2.y;
  }

  isCircle(): boolean {
    const a = Math.abs(this.point1.x - this.point2.x);
    const b = Math.abs(this.point1.y - this.point2.y);
    return a === b;
  }

  intersectsOneAxis(distance: number): boolean {
    const centerX = (this.point1.x + this.point2.x) / 2;
    const centerY = (this.point1.y + this.point2.y) / 2;
    const a = Math.abs(this.point1.x - this.point2.x) / 2;
    const b = Math.abs(this.point1.y - this.point2.y) / 2;

    const intersectsX = Math.abs(centerX) <= distance && b >= Math.abs(centerY);
    const intersectsY = Math.abs(centerY) <= distance && a >= Math.abs(centerX);

    return intersectsX || intersectsY;
  }
}
