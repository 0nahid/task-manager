import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  geAllTasks() {
    return this.tasks;
  }
}
