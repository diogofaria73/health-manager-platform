import { PatientsNotFound } from '@/domain/patient/use-cases/error-messages/patients-not-found-error-message';
import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
  UsePipes,
} from '@nestjs/common';
import { PatientPresenter } from '../presenter/patient-data-presenter';
import { ZodPipeValidator } from '@/infra/utils/pipes/zod-pipe-validator';
import { ListPatientByIdUseCase } from '@/domain/patient/use-cases/list-patients-by-id-use-case';
import { z } from 'zod';

const patientParamSchema = z.object({
  id: z.string().uuid(),
});

type PatientParamSchema = z.infer<typeof patientParamSchema>;

@Controller('patient')
@UsePipes(new ZodPipeValidator(patientParamSchema))
export class ListPatientByIdController {
  constructor(
    private readonly listPatientByIdUseCase: ListPatientByIdUseCase,
  ) {}

  @Get('list-by-id/:id')
  async handle(@Param() params: PatientParamSchema) {
    const { id } = params;
    const result = await this.listPatientByIdUseCase.execute(id);

    if (result.isLeft()) {
      const error = result.value;

      switch (error.constructor) {
        case PatientsNotFound:
          return new NotFoundException(error);
        default:
          return new BadRequestException(error.message);
      }
    }

    const patient = result.value.patient;

    return { patient: PatientPresenter.toHttp(patient) };
  }
}
