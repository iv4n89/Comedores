import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CommPlaceService } from './comm_place.service';
import { CreateCommPlaceDto } from './dto/create-comm_place.dto';
import { UpdateCommPlaceDto } from './dto/update-comm_place.dto';

@Controller('comm-place')
export class CommPlaceController {
  constructor(private readonly commKitchenService: CommPlaceService) {}

  @Post()
  create(@Body() createCommKitchenDto: CreateCommPlaceDto) {
    return this.commKitchenService.create(createCommKitchenDto);
  }

  @Get()
  findAll() {
    return this.commKitchenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.commKitchenService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCommKitchenDto: UpdateCommPlaceDto,
  ) {
    return this.commKitchenService.update(id, updateCommKitchenDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.commKitchenService.remove(id);
  }
}
