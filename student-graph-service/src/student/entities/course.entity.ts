import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Student } from './student.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Course {

  @Field((type) => ID)
  id: string;

  @Field((type) => [Student])
  students:Student[]
}
