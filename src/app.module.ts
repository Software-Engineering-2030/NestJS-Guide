import { Module } from '@nestjs/common';
import { SequilizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    OrdersModule,
    SequelizeModule.forRoot({
      dialet: 'sqlite', forRoot(options: SequelizeModuleOptions):
      host: join(...paths: __dirname, 'database.sqlite')
      autoLoadModels: true
    })
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
