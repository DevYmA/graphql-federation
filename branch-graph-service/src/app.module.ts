import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { BranchModule } from './branch/branch.module';

@Module({
  imports: [
    BranchModule,
    GraphQLModule.forRoot(
      { autoSchemaFile: join(process.cwd(), 'src/gql-schema.gql'), }
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
