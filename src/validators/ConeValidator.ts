import { Point3D } from '../entities/points/Point3D';

export class ConeValidator {
  static validateBaseCenter(baseCenter: Point3D): boolean {
    return baseCenter.x >= 0 && baseCenter.y >= 0 && baseCenter.z >= 0;
  }

  static validateData(data: number[]): boolean {
    return (
      data.length === 5 &&
      data.every((value) => !isNaN(value)) &&
      data[3] > 0 &&
      data[4] > 0
    );
  }
}
