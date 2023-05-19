import { IsInt, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";


export class CreateCommunityPersonDto {

    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsOptional()
    @IsString()
    surname?: string;

    @IsNotEmpty()
    @IsPhoneNumber('ES')
    @IsString()
    telephone: string;

    @IsNotEmpty()
    @IsInt()
    entityId: number;

}