import { BadRequestException } from '@nestjs/common';
import { SumService } from '../sum.service';

describe('SumService', () => {
  let sumService: SumService;
  beforeAll(() => {
    sumService = new SumService();
  });

  it('should return the result of two numbers sum', () => {
    const a = 5;
    const b = 10;
    expect(sumService.getSum(a, b)).toBe(15);
  });

  it('should throw Exception if one of the parameters is missing', () => {
    const a: number | undefined = 5;
    const b: number | undefined = undefined;
    expect(() => sumService.getSum(a, b)).toThrow(
      new BadRequestException('Both parameters must be provided'),
    );
  });
});
