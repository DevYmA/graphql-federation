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
          { name: "students", url: "http://localhost:3002/graphql" },
          { name: "courses", url: "http://localhost:3001/graphql" },
          { name: "branches", url: "http://localhost:3000/graphql" }
        ]
      }
    }
  )],
  controllers: [],
  providers: [],
})
export class AppModule { }
