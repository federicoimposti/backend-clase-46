import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    price: string;

    @ApiProperty()
    thumbnail: string;

    @ApiProperty()
    id: string;
}