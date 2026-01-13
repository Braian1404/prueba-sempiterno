import { Column, Entity, PrimaryColumn, DeleteDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('medicalServices')
export class MedicalService {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    name:string

    @Column()
    description: string

    @Column()
    cost: number

    @Column()
    duration: number

    @Column()
    availableDate: Date

    @DeleteDateColumn({ name: 'deletedAt', nullable: true })
    deletedAt: Date;


}
