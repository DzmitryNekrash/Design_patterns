import { Oval } from '../../src/entities/Oval';
import { Point2D } from '../../src/entities/points/Point2D';
import { OvalFactory } from '../../src/factories/OvalFactory';
import { ERROR_POINTS_ON_SAME_LINE } from '../../src/utils/errorMessages';

describe('Oval', () => {
  it('should calculate area correctly', () => {
    const oval = new Oval('', new Point2D(0, 0), new Point2D(4, 6));
    const area = oval.getArea();
    expect(area).toBeCloseTo(18.85, 3);
  });

  it('should calculate perimeter correctly', () => {
    const oval = new Oval('', new Point2D(0, 0), new Point2D(4, 6));
    const perimeter = oval.getPerimeter();
    expect(perimeter).toBeCloseTo(15.865, 3);
  });

  it('should identify as an oval', () => {
    const oval = new Oval('', new Point2D(0, 0), new Point2D(4, 6));
    expect(oval.isOval()).toBe(true);
  });

  it('should identify as a circle when points are equidistant', () => {
    const oval = new Oval('', new Point2D(0, 0), new Point2D(4, 4));
    expect(oval.isCircle()).toBe(true);
  });

  it('should throw an error for invalid format', () => {
    const invalidData = 'Oval "0 0"';

    expect(() => {
      const factory = new OvalFactory();
      factory.factoryMethod('', invalidData);
    }).toThrow('неверное количество координат');
  });

  it('should throw an error for points on the same line', () => {
    const invalidData = 'Oval "0 0 0 5"';

    expect(() => {
      const factory = new OvalFactory();
      factory.factoryMethod('', invalidData);
    }).toThrow(ERROR_POINTS_ON_SAME_LINE);
  });
});
