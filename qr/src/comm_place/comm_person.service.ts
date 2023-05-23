import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCommunityPersonDto } from "./dto/create-comm_person.dto";
import { UpdateCommunityPersonDto } from "./dto/update-comm_person.dto";
import { CommunityEntityPerson } from "./entities/comm_entity_person.entity";


@Injectable()
export class CommunityPersonService {

    constructor(
        @InjectRepository(CommunityEntityPerson)
        private readonly commPersonRepository: Repository<CommunityEntityPerson>,
    ) {}

    create(createCommPersonDto: CreateCommunityPersonDto) {
        const person = this.commPersonRepository.create({
            ...createCommPersonDto,
            entity: { id: createCommPersonDto.entity }
        });
        return this.commPersonRepository.save(person);
    }

    findAll() {
        return this.commPersonRepository.find({ loadEagerRelations: true });
    }

    findOne(id: number) {
        return this.commPersonRepository.findOneOrFail({ where: { id }, loadEagerRelations: true });
    }
    
    async update(id: number, updateCommPersonDto: UpdateCommunityPersonDto) {
        const person = await this.findOne(id);
        Object.assign(person, updateCommPersonDto);
        return this.commPersonRepository.save(person);
    }

    delete(id: number) {
        return this.commPersonRepository.softDelete({ id });
    }

}