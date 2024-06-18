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
import { UpdatePatientUseCase } from '@/domain/patient/use-cases/updated-patient-use-case';

const updatePatientBodySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  isActive: z.boolean(),
});

type UpdatePatientBodySchema = z.infer<typeof updatePatientBodySchema>;

@Controller('patients')
@UsePipes(new ZodPipeValidator(updatePatientBodySchema))
export class UpdatePatientController {
  constructor(private readonly updatePatientUseCase: UpdatePatientUseCase) {}

  @Post('update')
  async handle(@Body() body: UpdatePatientBodySchema) {
    const { id, name, email, phone, isActive } = body;

    const result = await this.updatePatientUseCase.execute({
      id,
      name,
      email,
      phone,
      isActive,
    });

    if (result.isLeft()) {
      const error = result.value;

      switch (error.constructor) {
        case PatientAlreadyExistsError:
          return new ConflictException(error);
        default:
          return new BadRequestException(error.message);
      }
    }
    return { patient_updated: PatientPresenter.toHttp(result.value.patient) };
  }
}
