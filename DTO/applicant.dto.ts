import { IsNotEmpty, IsOptional, IsString, IsArray } from "class-validator"

export class ApplicantDTO {
  @IsNotEmpty()
  @IsString()
  walletAddress: string

  @IsNotEmpty()
  @IsString()
  twitterHandle: string

  @IsNotEmpty()
  @IsString()
  reason: string

  @IsNotEmpty()
  @IsString()
  creatorType: string

  @IsOptional()
  @IsString()
  currentResponseId?: string

  @IsOptional()
  @IsString()
  timestamp?: string

  @IsOptional()
  @IsArray()
  typeformResponses?: Array<{ id: string; timestamp: string }>

  @IsOptional()
  @IsString()
  tokenId?: string
}
