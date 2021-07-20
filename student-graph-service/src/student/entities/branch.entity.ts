import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Student } from './student.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Branch {

  @Field((type) => ID)
  @Directive('@external')
  id: string;

  @Field((type) => [Student])
  students:Student[]
}
