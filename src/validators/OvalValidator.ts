import { Point2D } from '../entities/points/Point2D';

export class OvalValidator {
  static validatePoints(point1: Point2D, point2: Point2D): boolean {
    return point1.x !== point2.x && point1.y !== point2.y;
  }

  static validateData(data: number[]): boolean {
    return data.length === 4 && data.every((value) => !isNaN(value));
  }
}
