import { PatientsNotFound } from '@/domain/patient/use-cases/error-messages/patients-not-found-error-message';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  UsePipes,
} from '@nestjs/common';
import { PatientPresenter } from '../presenter/patient-data-presenter';
import { ZodPipeValidator } from '@/infra/utils/pipes/zod-pipe-validator';
import { ListPatientByIdUseCase } from '@/domain/patient/use-cases/list-patients-by-id-use-case';
import { z } from 'zod';

const patientBodySchema = z.object({
  id: z.string().uuid(),
});

type PatientBodySchema = z.infer<typeof patientBodySchema>;

@Controller('patient')
@UsePipes(new ZodPipeValidator(patientBodySchema))
export class ListPatientByIdController {
  constructor(
    private readonly listPatientByIdUseCase: ListPatientByIdUseCase,
  ) {}

  @Post('list-by-id')
  async handle(@Body() body: PatientBodySchema) {
    const { id } = body;
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
