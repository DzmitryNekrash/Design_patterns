import { Oval } from '../entities/Oval';

export class OvalService {
  static getArea(oval: Oval): number {
    const a = Math.abs(oval.point1.x - oval.point2.x) / 2;
    const b = Math.abs(oval.point1.y - oval.point2.y) / 2;
    return Math.PI * a * b;
  }

  static getPerimeter(oval: Oval): number {
    const a = Math.abs(oval.point1.x - oval.point2.x) / 2;
    const b = Math.abs(oval.point1.y - oval.point2.y) / 2;
    return Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
  }
}
