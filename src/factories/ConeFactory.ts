import { Factory } from './Factory';
import { Cone } from '../entities/Cone';
import { Point3D } from '../entities/points/Point3D';
import { Shape } from '../entities/Shape';
import { CONE_PATTERN } from '../utils/constants';
import { ERROR_INVALID_FORMAT } from '../utils/errorMessages';

export class ConeFactory extends Factory {
  protected getPattern(): RegExp {
    return CONE_PATTERN;
  }

  factoryMethod(name: string, data: string): Shape | null {
    const match = this.getPattern().exec(data);
    console.log('Проверяемая строка:', data);
    console.log('Координаты:', match?.[2] || 'не найдены');

    if (!match) {
      throw new Error(`${ERROR_INVALID_FORMAT}: ${data}`);
    }

    const coordinates = match[2].trim().split(/\s+/).map(Number);
    if (coordinates.length !== 5) {
      throw new Error(
        `${ERROR_INVALID_FORMAT}: неверное количество параметров`
      );
    }

    const [x, y, z, radius, height] = coordinates;
    return new Cone(name, new Point3D(x, y, z), height, radius);
  }
}
