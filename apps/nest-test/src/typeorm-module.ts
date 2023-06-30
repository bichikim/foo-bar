import {ConfigModule, ConfigService} from '@nestjs/config'
import {TypeOrmModule, TypeOrmModuleOptions} from '@nestjs/typeorm'
import * as entities from 'src/entities'

export const typeormFactory = (): TypeOrmModuleOptions => {
  return {
    database: 'mysql',
    entities: Object.values(entities),
    retryAttempts: 3,
    type: 'sqlite',
  }
}

export const typeormModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: typeormFactory,
})
