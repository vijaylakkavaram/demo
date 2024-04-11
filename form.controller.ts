// form.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { FormDataDto } from './form.dto';
import { FormService } from './form.service';
import { FormDataEntity } from './form.entity';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async saveFormData(@Body() data: FormDataDto): Promise<FormDataEntity> {
    console.log(data);
    return this.formService.saveFormData(data);
  }
  
  @Get()
  async getFormData(): Promise<FormDataEntity[]> {
    return this.formService.getFormData();
  }
}
