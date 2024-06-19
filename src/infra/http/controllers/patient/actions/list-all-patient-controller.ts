import { PatientsNotFound } from '@/domain/patient/use-cases/error-messages/patients-not-found-error-message';
import { ListAllPatientsUseCase } from '@/domain/patient/use-cases/list-all-patients-use-case';
import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { PatientPresenter } from '../presenter/patient-data-presenter';
import { AuthGuard } from '@nestjs/passport';

@Controller('patient')
export class ListAllPatientsController {
  constructor(
    private readonly listAllPatientsUseCase: ListAllPatientsUseCase,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('list-all')
  async handle() {
    const result = await this.listAllPatientsUseCase.execute();

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

    return { patient_list: patients.map(PatientPresenter.toHttp) };
  }
}
