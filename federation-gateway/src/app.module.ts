import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';



@Module({
  imports: [GraphQLGatewayModule.forRoot(
    {
      server: {
        cors: true
      },
      gateway: {
        serviceList: [
          { name: "students", url: "http://localhost:3002" },
          { name: "courses", url: "http://localhost:3001" }
        ]
      }
    }
  )],
  controllers: [],
  providers: [],
})
export class AppModule { }
