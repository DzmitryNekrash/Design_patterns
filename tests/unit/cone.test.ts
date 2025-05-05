import { Cone } from '../../src/entities/Cone';
import { Point3D } from '../../src/entities/points/Point3D';
import { ConeService } from '../../src/services/ConeService';

describe('Cone', () => {
  it('should calculate volume correctly', () => {
    const cone = new Cone('', new Point3D(0, 0, 0), 5, 3);
    const volume = cone.getVolume();
    expect(volume).toBeCloseTo(47.124, 3);
  });

  it('should calculate surface area correctly', () => {
    const cone = new Cone('', new Point3D(0, 0, 0), 5, 3);
    const surfaceArea = cone.getSurfaceArea();
    expect(surfaceArea).toBeCloseTo(83.23, 3);
  });

  it('should identify as a cone', () => {
    const cone = new Cone('', new Point3D(0, 0, 0), 5, 3);
    expect(cone.isCone()).toBe(true);
  });

  it('should check intersection with coordinate plane', () => {
    const cone = new Cone('', new Point3D(0, 0, 0), 5, 3);
    expect(cone.intersectsCoordinatePlane()).toBe(true);

    const cone2 = new Cone('', new Point3D(1, 1, 1), 5, 3);
    expect(cone2.intersectsCoordinatePlane()).toBe(false);
  });

  it('should calculate volume ratio correctly', () => {
    const cone = new Cone('', new Point3D(0, 0, 0), 5, 3);

    const ratio = ConeService.getVolumeRatio(cone, 'yz');

    expect(ratio).toBeCloseTo(1, 3);
  });
});
