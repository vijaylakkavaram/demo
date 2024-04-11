// form.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormDataDto } from './form.dto';
import { FormDataEntity } from './form.entity';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(FormDataEntity)
    private formDataRepository: Repository<FormDataEntity>,
  ) {}

  async saveFormData(data: FormDataDto): Promise<FormDataEntity> {
    const formData = new FormDataEntity();
    formData.name = data.name;
    formData.email = data.email;
    formData.phoneNumber = data.phoneNumber;
    formData.isGraduate  = data.isGraduate;

    // Map other fields...

    return this.formDataRepository.save(formData);
    
  }
  async getFormData(): Promise<FormDataEntity[]> {
    return this.formDataRepository.find();
  }
}
