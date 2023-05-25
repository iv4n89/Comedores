import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { State } from './entities/state.entity';
import { City } from './entities/city.entity';
import { Province } from './entities/province.entity';

@Module({
  controllers: [CountryController],
  providers: [CountryService],
  imports: [TypeOrmModule.forFeature([Country, State, City, Province])]
})
export class CountryModule {}
