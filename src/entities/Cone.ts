import { Shape } from './Shape';
import { Point3D } from './points/Point3D';
import { ConeService } from '../services/ConeService';

export class Cone extends Shape {
  constructor(
    name: string,
    public readonly baseCenter: Point3D,
    public readonly height: number,
    public readonly radius: number
  ) {
    super(name);
  }

  getVolume(): number {
    return ConeService.getVolume(this);
  }

  getSurfaceArea(): number {
    return ConeService.getSurfaceArea(this);
  }

  isCone(): boolean {
    return this.radius > 0 && this.height > 0;
  }

  intersectsCoordinatePlane(): boolean {
    return (
      this.baseCenter.x === 0 ||
      this.baseCenter.y === 0 ||
      this.baseCenter.z === 0
    );
  }
}
