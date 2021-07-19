import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { Course } from './entities/course.entity';

@Resolver((of) => Course)
export class CourseResolver {
  constructor(private readonly studentService: StudentService) {}

    
  @ResolveField()
  students(@Parent() course:Course):Promise<Student[]>{
    return this.studentService.findForCourse(course.id);
  }

}
