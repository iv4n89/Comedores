import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCommunityEntityDto } from "./dto/create-comm_entity.dto";
import { UpdateCommunityEntityDto } from "./dto/update-comm_entity.dto";
import { CommunityEntity } from "./entities/comm_entity.entity";
import { CommunityEntityPerson } from "./entities/comm_entity_person.entity";


@Injectable()
export class CommunityEntityService {
    constructor(
        @InjectRepository(CommunityEntity)
        private readonly commEntityRepository: Repository<CommunityEntity>,
        @InjectRepository(CommunityEntityPerson)
        private readonly commEntityPersonRepository: Repository<CommunityEntityPerson>,
    ) {}

    async create(createCommEntityDto: CreateCommunityEntityDto) {
        if (createCommEntityDto?.applicableRate && ![0.5, 0.75, 2.5].includes(createCommEntityDto.applicableRate)) {
            throw new HttpException(`Applicable rate of ${ createCommEntityDto.applicableRate } is not a valid value`, HttpStatus.BAD_REQUEST);
        }
        const commEntity = this.commEntityRepository.create({
            name: createCommEntityDto.name,
            nif: createCommEntityDto.nif,
            applicableRate: createCommEntityDto?.applicableRate || 0.5,
        });

        const entity = await this.commEntityRepository.save(commEntity);

        if (createCommEntityDto?.responsiblePerson) {
            const _person = this.commEntityPersonRepository.create(createCommEntityDto.responsiblePerson);
            _person.entity = entity;
            await this.commEntityPersonRepository.save(_person);
        }

        return entity;
    }

    findAll() {
        return this.commEntityRepository.find({ loadEagerRelations: true });
    }

    findOne(id: number) {
        return this.commEntityRepository.findOneOrFail({ where: { id }, loadEagerRelations: true });
    }

    async update(id: number, updateCommEntityDto: UpdateCommunityEntityDto) {
        if (updateCommEntityDto?.applicableRate && ![0.5, 0.75, 2.5].includes(updateCommEntityDto.applicableRate)) {
            throw new HttpException(`Applicable rate of ${ updateCommEntityDto.applicableRate } is not a valid value`, HttpStatus.BAD_REQUEST);
        }
        const _commEntity = await this.findOne(id);
        Object.assign(_commEntity, updateCommEntityDto);
        return this.commEntityRepository.save(_commEntity);
    }

    delete(id: number) {
        return this.commEntityRepository.softDelete({ id });
    }
}