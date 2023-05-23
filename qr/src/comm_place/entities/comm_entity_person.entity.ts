import { IsOptional } from "class-validator";
import { AfterLoad, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CommunityEntity } from "./comm_entity.entity";
import { CommPlace } from "./comm_place.entity";


@Entity({ name: 'community_entity_persons' })
export class CommunityEntityPerson {

    @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
    id: number;

    @Column('varchar', { name: 'name', nullable: false })
    name: string;

    @Column('varchar', { name: 'surname', nullable: true })
    surname: string;

    @Column('varchar', { name: 'telephone', nullable: false })
    telephone: string;

    @OneToMany(() => CommPlace, commPlace => commPlace.responsiblePerson)
    commPlaces: CommPlace[];

    @OneToOne(() => CommunityEntity, entity => entity.person)
    @JoinColumn({ name: 'entity_id' })
    entity: CommunityEntity;

    @IsOptional()
    responsibeFor: CommPlace;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @AfterLoad()
    getResponsibleFor() {
        if (this?.commPlaces?.length) {
            this.responsibeFor = this.commPlaces?.at(0);
        }
    }
}