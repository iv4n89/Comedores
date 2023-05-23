import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Address } from "src/user/entities/address.entity";
import { CommPlaceType } from "../entities/comm_place.entity";

export class CreateCommPlaceDto {

    @IsOptional()
    @IsString()
    name?: string;

    @IsNotEmpty()
    @IsString()
    cif: string;

    @IsOptional()
    @IsString()
    type?: CommPlaceType;

    @IsOptional()
    address?: Partial<Address>;

    @IsNotEmpty()
    @IsInt()
    entity: number;

    @IsNotEmpty()
    @IsInt()
    responsiblePerson: number;

}
