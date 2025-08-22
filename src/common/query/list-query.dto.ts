import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString, Min, Max } from 'class-validator';

export class ListQueryDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @Transform(({ value }) => {
    if (!value) return undefined;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    if (typeof value === 'object') return value;
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  })
  filter?: Record<string, any>;

  @IsOptional()
  @IsString()
  select?: string;

  @IsOptional()
  @IsString()
  include?: string;

  @IsOptional()
  @IsString()
  sort?: string;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  @Min(1)
  @Max(200)
  limit?: number = 20;
}
