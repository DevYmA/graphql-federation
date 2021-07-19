import { Injectable } from '@nestjs/common';
import { CreateBranchInput } from './dto/create-branch.input';
import { UpdateBranchInput } from './dto/update-branch.input';
import { Branch } from './entities/branch.entity';

@Injectable()
export class BranchService {

    branches: Branch[] = [
    {
      id: "1",
      name: "Southern",
      address: "No 299",
      contactNo: "794894896585"
    },
    {
      id: "2",
      name: "Western",
      address: "No 76",
      contactNo: "7655554566"
    },
    {
      id: "3",
      name: "Eastern",
      address: "No 320",
      contactNo: "9877378384758"
    }
  ];

  create(createBranchInput: CreateBranchInput) {
    return 'This action adds a new branch';
  }

  findAll() {
    return this.branches;
  }

  findOne(id: number|string) {
    let branches = this.findAll();
    return branches.find(branch => branch.id === id);;
  }

  update(id: number, updateBranchInput: UpdateBranchInput) {
    return `This action updates a #${id} branch`;
  }

  remove(id: number) {
    return `This action removes a #${id} branch`;
  }
}
