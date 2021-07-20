import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3005, ()=>{
    console.log('Listerning 3005');
  });
}
bootstrap();
