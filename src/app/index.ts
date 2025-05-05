import { parseInputFile } from '../utils/fileParser';
import { ShapeParser } from '../parser/ShapeParser';
import { logger } from '../logger/logger';
import { InvalidShapeError } from '../exceptions/InvalidShapeError';
import { Cone } from '../entities/Cone';
import { ConeService } from '../services/ConeService';
import { Oval } from '../entities/Oval';
import { OvalService } from '../services/OvalService';

const lines = parseInputFile('figures.txt');

lines.forEach((line, index) => {
  try {
    const shape = ShapeParser.parse(line);

    if (!shape) {
      throw new InvalidShapeError(`Некорректный формат строки: ${line}`);
    }

    if (shape instanceof Cone) {
      logger.info(
        `✔ ${shape.name}:
        Объём = ${ConeService.getVolume(shape).toFixed(2)}
        Площадь поверхности = ${ConeService.getSurfaceArea(shape).toFixed(2)}`
      );
    } else if (shape instanceof Oval) {
      logger.info(
        `✔ ${shape.name}:
        Площадь = ${OvalService.getArea(shape).toFixed(2)}
        Периметр = ${OvalService.getPerimeter(shape).toFixed(2)}`
      );
    }
  } catch (err) {
    logger.error(`✖ Строка ${index + 1}: ${(err as Error).message}`);
  }
});
