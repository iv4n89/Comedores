import { Address } from "src/user/entities/address.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { State } from "./state.entity";


@Entity({ name: 'cities' })
export class City {

    @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
    id: number;

    @Column('varchar', { name: 'name', nullable: false })
    name: string;

    @Column('varchar', { name: 'postal_code', nullable: false })
    postalCode: string;

    @ManyToOne(() => State, state => state.cities)
    @JoinColumn({ name: 'state_id' })
    state: State;

    @OneToMany(() => Address, address => address.city)
    address: Address;

}