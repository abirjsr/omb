 


// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
// import * as session from 'express-session';
// import * as passport from 'passport';

 

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.use(
//     session({
//       secret: 'my-secret',
//       resave: false,
//       saveUninitialized:false,
//       cookie: {
//         secure: false, 
//         maxAge: 24 * 60 * 60 * 1000
//       }
//     }),
//   );
//   app.enableCors();
  
  
//   await app.listen(9001);
// }
// bootstrap();



 import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // CORS for frontend on port 1900
  app.enableCors({
    origin: 'http://localhost:1900', // Your frontend port
    credentials: true,
  });

  // Session middleware
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      }
    }),
  );

  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(9001);
  console.log('Backend running on http://localhost:9001');
}
bootstrap();