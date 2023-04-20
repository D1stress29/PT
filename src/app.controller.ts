import { Controller, UseGuards, Request, Post } from "@nestjs/common";
import { AppService } from './app.service';
import { LocalAuthGuard } from "./auth/guards/local.guards";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }




}
