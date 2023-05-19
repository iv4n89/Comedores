import { Address } from "src/user/entities/address.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { City } from "./city.entity";
import { Country } from "./country.entity";


@Entity({ name: 'states' })
export class State {

    @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
    id: number;

    @Column('varchar', { name: 'name', nullable: false })
    name: string;

    @ManyToOne(() => Country, country => country.states)
    @JoinColumn({ name: 'country_id' })
    country: Country;

    @OneToMany(() => Address, address => address.state)
    addresses: Address[];

    @OneToMany(() => City, city => city.state)
    cities: City[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}