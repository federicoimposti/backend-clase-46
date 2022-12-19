import { ApiProperty } from "@nestjs/swagger";

export class UpdateProductDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    price: string;

    @ApiProperty()
    thumbnail: string;

    @ApiProperty()
    id: string;
}