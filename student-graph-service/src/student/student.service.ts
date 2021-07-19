import { Injectable } from '@nestjs/common';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {

  students: Student[] = [
    {
      id: "1",
      firstName: "Ricky",
      lastName: "Gremmy",
      courseId: "1"
    },
    {
      id: "2",
      firstName: "Glean",
      lastName: "Misko",
      courseId: "2"
    },
    {
      id: "3",
      firstName: "Serrah",
      lastName: "Ferarh",
      courseId: "1"
    }
  ];

  create(createStudentInput: CreateStudentInput) {
    return 'This action adds a new student';
  }

  findAll() {
    return this.students;
  }

  findAllByCourseId(id:string) {
    let courses = this.findAll();
    return this.students.filter(student => student.courseId == id);
  }

  findOne(id: number | string) {
    let courses = this.findAll();
    return this.students.find(student => student.id === id);
  }

  update(id: number, updateStudentInput: UpdateStudentInput) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }

  async findForCourse(id:string){
    return this.findAllByCourseId(id);
  }
}
