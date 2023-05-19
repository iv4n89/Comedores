import { IsDecimal, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateCommunityEntityDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    nif: string;

    @IsOptional()
    @IsDecimal()
    applicableRate?: 0.50 | 0.75 | 2.50;

}