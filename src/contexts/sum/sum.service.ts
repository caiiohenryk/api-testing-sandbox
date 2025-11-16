import { BadRequestException } from '@nestjs/common';

export class SumService {
  /* Função criada com undefined como possível
  valor para simular a ausência de parâmetros */
  getSum(a: number | undefined, b: number | undefined): number {
    if (a === undefined || b === undefined) {
      throw new BadRequestException('Both parameters must be provided');
    }
    return a + b;
  }
}
