import { Injectable } from '@nestjs/common';
import { CreateCourseInput } from './dto/create-course.input';
import { UpdateCourseInput } from './dto/update-course.input';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {

  private courses: Course[] = [
    {
      id: "1",
      name: "Spring Boot"
    },
    {
      id: "2",
      name: "Node JS"
    },
    {
      id: "3",
      name: "Angular"
    }
  ];

  create(createCourseInput: CreateCourseInput) {
    return 'This action adds a new course';
  }

  findAll() {
    return this.courses;
  }

  findOne(id: number|string) {
    let courses = this.findAll();
    return courses.find(course => course.id === id);
  }

  update(id: number, updateCourseInput: UpdateCourseInput) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
