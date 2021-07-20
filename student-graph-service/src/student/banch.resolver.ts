import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';
import { Course } from './entities/course.entity';
import { Branch } from './entities/branch.entity';

@Resolver((of) => Branch)
export class BranchResolver {
  constructor(private readonly studentService: StudentService) { }


  @ResolveField((of) => [Student])
  students(@Parent() branch: Branch): Promise<Student[]> {
    return this.studentService.findAllByBranchId(branch.id);
  }


}
