import { Configuration, Controller, Get, Inject, Post } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import { JSONPMiddleware, JSONPService } from '../../../../src/';

@Configuration({
  imports: [
    koa,
    require('../../../../src')
  ],
  importConfigs: [
    {
      default: {
        keys: ["test"],
        cors: {
          allowMethods: 'Post',
          credentials: true,
          origin: (req) => {
            return req.headers.origin;
          }
        }
      }
    }
  ]
})
export class AutoConfiguration {}


@Controller('/')
export class HomeController {
  @Inject()
  ctx;

  @Inject()
  jsonpService: JSONPService;

  @Get('/cors')
  @Post('/cors')
  async cors() {
    return { test: 123 }
  }

  @Post('/jsonp', { middleware: [JSONPMiddleware]})
  async jsonp() {
    return { test: 123 };
  }


  @Get('/ctx-jsonp')
  async ctxJsonp() {
    return this.ctx.jsonp({ test: 456 })
  }
}
