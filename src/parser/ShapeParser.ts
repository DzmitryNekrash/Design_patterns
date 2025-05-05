import { ConeFactory } from '../factories/ConeFactory';
import { OvalFactory } from '../factories/OvalFactory';
import { Shape } from '../entities/Shape';
import { Factory } from '../factories/Factory';
import { ERROR_INVALID_FORMAT } from '../utils/errorMessages';

export class ShapeParser {
  private static creators: Factory[] = [new ConeFactory(), new OvalFactory()];

  static parse(line: string): Shape | null {
    for (const creator of this.creators) {
      try {
        const shape = creator.create(line);
        if (shape) return shape;
      } catch {
        throw new Error(ERROR_INVALID_FORMAT);
      }
    }
    return null;
  }
}
