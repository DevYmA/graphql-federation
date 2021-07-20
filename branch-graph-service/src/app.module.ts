import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { BranchModule } from './branch/branch.module';

@Module({
  imports: [
    BranchModule,
    GraphQLFederationModule.forRoot(
      { autoSchemaFile: join(process.cwd(), 'src/gql-schema.gql'), }
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
