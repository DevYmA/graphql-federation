import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { CourseResolver } from './course.resolver';
import { BranchResolver } from './banch.resolver';

@Module({
  providers: [StudentResolver, StudentService, CourseResolver, BranchResolver]
})
export class StudentModule {}
