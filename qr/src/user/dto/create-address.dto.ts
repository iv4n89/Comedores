import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateAddressDto {

    @IsNotEmpty()
    @IsString()
    addrType: string;

    @IsNotEmpty()
    @IsString()
    streetName: string;

    @IsNotEmpty()
    @IsInt()
    streetNumber: number;

    @IsOptional()
    @IsInt()
    floor: number;

    @IsOptional()
    @IsString()
    door: string;

    @IsOptional()
    @IsString()
    extraInfo: string;

    @IsOptional()
    @IsInt()
    countryId: number;

    @IsOptional()
    @IsInt()
    stateId: number;

    @IsOptional()
    @IsInt()
    cityId: number;

}