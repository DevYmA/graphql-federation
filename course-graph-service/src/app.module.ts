import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    CourseModule,
    GraphQLFederationModule.forRoot(
      { autoSchemaFile: join(process.cwd(), 'src/gql-schema.gql'), }
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
