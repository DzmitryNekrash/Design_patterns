import { Factory } from './Factory';
import { Oval } from '../entities/Oval';
import { Point2D } from '../entities/points/Point2D';
import { Shape } from '../entities/Shape';
import { OVAL_PATTERN } from '../utils/constants';
import {
  ERROR_INVALID_FORMAT,
  ERROR_POINTS_ON_SAME_LINE,
} from '../utils/errorMessages';

export class OvalFactory extends Factory {
  protected getPattern(): RegExp {
    return OVAL_PATTERN;
  }

  factoryMethod(name: string, data: string): Shape | null {
    const match = this.getPattern().exec(data);
    console.log('Проверяемая строка:', data);
    console.log('Координаты:', match?.[2] || 'не найдены');

    if (!match) {
      throw new Error(`${ERROR_INVALID_FORMAT}: ${data}`);
    }

    const coordinates = match[2].trim().split(/\s+/).map(Number);
    if (coordinates.length !== 4) {
      throw new Error(`${ERROR_INVALID_FORMAT}: неверное количество координат`);
    }

    const [x1, y1, x2, y2] = coordinates;

    if (x1 === x2 || y1 === y2) {
      throw new Error(ERROR_POINTS_ON_SAME_LINE);
    }

    return new Oval(name, new Point2D(x1, y1), new Point2D(x2, y2));
  }
}
