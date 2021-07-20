import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Branch } from './branch.entity';
import { Course } from './course.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Student {

  @Field((type) => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(()=>Course)
  course?:Course

  @Field(()=>Branch)
  branch?:Branch

  @Field()
  courseId: string;

  @Field()
  branchId: string;
}
