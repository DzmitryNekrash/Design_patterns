import { Cone } from '../entities/Cone';
import {
  ERROR_INVALID_PLANE,
  ERROR_PLANE_DOES_NOT_INTERSECT,
} from '../utils/errorMessages';

export class ConeService {
  static getVolume(cone: Cone): number {
    return (1 / 3) * Math.PI * Math.pow(cone.radius, 2) * cone.height;
  }

  static getSurfaceArea(cone: Cone): number {
    const slantHeight = Math.sqrt(
      Math.pow(cone.radius, 2) + Math.pow(cone.height, 2)
    );
    return Math.PI * cone.radius * (cone.radius + slantHeight);
  }

  static getVolumeRatio(cone: Cone, plane: 'xy' | 'yz' | 'zx'): number {
    const baseArea = Math.PI * Math.pow(cone.radius, 2);
    let heightAbovePlane: number;
    let heightBelowPlane: number;

    if (plane === 'xy') {
      heightAbovePlane = cone.height;
      heightBelowPlane = 0;
    } else if (plane === 'yz') {
      heightAbovePlane = Math.max(0, cone.baseCenter.x + cone.radius);
      heightBelowPlane = Math.max(0, cone.radius - cone.baseCenter.x);
    } else if (plane === 'zx') {
      heightAbovePlane = Math.max(0, cone.baseCenter.y + cone.radius);
      heightBelowPlane = Math.max(0, cone.radius - cone.baseCenter.y);
    } else {
      throw new Error(ERROR_INVALID_PLANE);
    }

    if (heightAbovePlane === 0 || heightBelowPlane === 0) {
      throw new Error(ERROR_PLANE_DOES_NOT_INTERSECT);
    }

    const volumeAbove = (1 / 3) * baseArea * heightAbovePlane;
    const volumeBelow = (1 / 3) * baseArea * heightBelowPlane;

    return volumeAbove / volumeBelow;
  }
}
