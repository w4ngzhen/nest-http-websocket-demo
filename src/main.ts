import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {HttpServiceResponseInterceptor} from "./base/interceptor/http-service.response.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 增加HTTP服务的成功响应拦截器
  app.useGlobalInterceptors(new HttpServiceResponseInterceptor());

  await app.listen(3000);
}
bootstrap();
