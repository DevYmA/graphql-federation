import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { Branch } from './student/entities/branch.entity';
import { Course } from './student/entities/course.entity';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    StudentModule,
    GraphQLFederationModule.forRoot(
      {
        autoSchemaFile: join(process.cwd(), 'src/gql-schema.gql'),
        buildSchemaOptions: {
          orphanedTypes: [Course, Branch]
        }
      }
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
