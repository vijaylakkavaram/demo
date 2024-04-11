import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FormDataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  email: string;
  
  @Column({  })
  phoneNumber: number;

  @Column({ default: false })
  isGraduate: boolean;
  
}
