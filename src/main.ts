import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {HttpServiceResponseInterceptor} from "./base/interceptor/http-service.response.interceptor";
import {HttpServiceExceptionFilter} from "./base/filter/http-service.exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 增加HTTP服务的成功响应拦截器
  app.useGlobalInterceptors(new HttpServiceResponseInterceptor());
  // 增加HTTP服务的异常过滤器，进行响应包裹
  app.useGlobalFilters(new HttpServiceExceptionFilter());

  await app.listen(3000);
}
bootstrap();
