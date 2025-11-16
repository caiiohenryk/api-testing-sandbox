import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class SumService {
  /* Function created with undefined as a possible value
  to simulate the absence of parameters */
  getSum(a: number | undefined, b: number | undefined): number {
    if (a === undefined || b === undefined) {
      throw new BadRequestException('Both parameters must be provided');
    }
    return a + b;
  }
}
