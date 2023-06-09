import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
  UseInterceptors,
} from '@nestjs/common';

import { UserApiDefinition } from '@think/domains';

import { VerifyService } from '@services/verify.service';

@Controller('verify')
export class VerifyController {
  constructor(private readonly verifyService: VerifyService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(UserApiDefinition.sendVerifyCode.server)
  @HttpCode(HttpStatus.CREATED)
  async sendVerifyCode(@Query('email') email) {
    return await this.verifyService.sendVerifyCode(email);
  }
}
