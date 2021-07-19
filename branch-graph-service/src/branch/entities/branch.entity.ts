import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Branch {
  
  @Field()
  id:string

  @Field()
  name:string

  @Field()
  address:string

  @Field()
  contactNo:string
}
