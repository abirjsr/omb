import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,   // 👈 very important
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://postgres.qryzmpnzwkinuyfjvvqm:cmGx4zQN60GavVrC@aws-1-ap-south-1.pooler.supabase.com:5432/postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AdminModule,
  ],
})
export class AppModule {}