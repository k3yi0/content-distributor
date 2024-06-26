import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap () {
  const app = await NestFactory.create(AppModule, {
    abortOnError: false,
    cors: true,
  })
  await app.listen(3250)
}

bootstrap()
