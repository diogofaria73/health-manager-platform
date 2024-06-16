import { CreatePatientUseCase } from '@/domain/patient/use-cases/create-patient-use-case';
import { PatientAlreadyExistsError } from '@/domain/patient/use-cases/error-messages/patient-already-exists-error-message';
import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Post,
  UsePipes,
} from '@nestjs/common';
import { PatientPresenter } from '../presenter/patient-data-presenter';
import { ZodPipeValidator } from '@/infra/utils/pipes/zod-pipe-validator';
import { z } from 'zod';

const createPatientBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  isActive: z.boolean(),
});

type CreatePatientBodySchema = z.infer<typeof createPatientBodySchema>;

@Controller('patients')
@UsePipes(new ZodPipeValidator(createPatientBodySchema))
export class CreatePatientController {
  constructor(private readonly createPatientUseCase: CreatePatientUseCase) {}

  @Post('create')
  async handle(@Body() body: CreatePatientBodySchema) {
    const { name, email, phone, isActive } = body;

    const result = await this.createPatientUseCase.execute({
      name,
      email,
      phone,
      isActive,
    });

    if (result.isLeft()) {
      const error = result.value;

      switch (error.constructor) {
        case PatientAlreadyExistsError:
          throw new ConflictException(error);
        default:
          throw new BadRequestException(error.message);
      }
    }
    return { patient: PatientPresenter.toHttp(result.value.patient) };
  }
}
