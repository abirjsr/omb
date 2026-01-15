//  // src/app.module.ts
// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { AdminModule } from './admin/admin.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AdminEntity } from './admin/admin.entity';

// // @Module({
// //    imports: [AdminModule, TypeOrmModule.forRoot(
// //     {
// //       type: 'postgres',
// //       host: 'dpg-d25r49a4d50c73fjma40-a.singapore-postgres.render.com',
// //       port: 5432,
// //       username: 'office_management_taln_user',
// //       password: 'jHyLtss6t2w1s0DWYwMYn25tnmoT0GE2',
// //       database: 'office_management_taln',
// //       autoLoadEntities: true,
// //       synchronize: true,
// //       extra : {
// //         ssl: {
// //           rejectUnauthorized: false,
// //         }
// //       }
// //       } ),
// //       TypeOrmModule.forFeature([ AdminEntity ]), 
// // ],
// //   controllers: [AppController],
// //   providers: [AppService],
// // })
// // export class AppModule {}


 


//  @Module({
//   imports: [
//     AdminModule, 
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'aws-1-ap-southeast-1.pooler.supabase.com',
//       port: 5432,
//       username: 'postgres.osxvxpymcdoxphoswsky',
//       password: 'database1234', // Make sure this is your actual password
//       database: 'postgres', // ← CHANGED FROM 'supabasedb' TO 'postgres'
//       autoLoadEntities: true,
//       synchronize: true,
//       extra: {
//         ssl: {
//           rejectUnauthorized: false,
//         }
//       }
//     }),
//     TypeOrmModule.forFeature([AdminEntity]), 
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}


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
      url: 'postgresql://postgres:tlNLkSrzCNlkaPHxngisMmoYIDfaJjqW@maglev.proxy.rlwy.net:33322/railway',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AdminModule,
  ],
})
export class AppModule {}