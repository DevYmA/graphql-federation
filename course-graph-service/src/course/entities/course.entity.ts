import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType()
@Directive('@key(fields: "id")')
export class Course {
  
  @Field((type)=> ID)
  id: string;

  @Field()
  name: string;

}
