import { PatientsNotFound } from '@/domain/patient/use-cases/error-messages/patients-not-found-error-message';
import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
  Post,
  UsePipes,
} from '@nestjs/common';
import { PatientPresenter } from '../presenter/patient-data-presenter';
import { ZodPipeValidator } from '@/infra/utils/pipes/zod-pipe-validator';
import { z } from 'zod';
import { ListPatientByEmailUseCase } from '@/domain/patient/use-cases/list-patients-by-email-use-case';

const createPatientBodySchema = z.object({
  email: z.string().email(),
});

type CreatePatientBodySchema = z.infer<typeof createPatientBodySchema>;

@Controller('patient')
@UsePipes(new ZodPipeValidator(createPatientBodySchema))
export class ListPatientByEmailController {
  constructor(
    private readonly listPatientByEmailUseCase: ListPatientByEmailUseCase,
  ) {}

  @Post('list-by-email')
  async handle(@Body() body: CreatePatientBodySchema) {
    const { email } = body;
    const result = await this.listPatientByEmailUseCase.execute(email);

    if (result.isLeft()) {
      const error = result.value;

      switch (error.constructor) {
        case PatientsNotFound:
          return new NotFoundException(error);
        default:
          return new BadRequestException(error.message);
      }
    }

    const patients = result.value.patient;

    return { patient: PatientPresenter.toHttp(patients) };
  }
}
