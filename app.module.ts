// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { FormDataEntity } from './form.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'demo',
      entities: [FormDataEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([FormDataEntity]),
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class AppModule {}
