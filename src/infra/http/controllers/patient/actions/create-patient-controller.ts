import { Controller, Post } from '@nestjs/common';

@Controller('patients')
export class CreatePatientController {
  constructor() {}

  @Post('create')
  async handle() {
    return 'Patient created';
  }
}
