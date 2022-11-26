import { Injectable } from '@nestjs/common';
import { Tasks } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Tasks[] = [];

  geAllTasks() {
    return this.tasks;
  }
  createATask(task: Tasks) {
    this.tasks.push(task);
  }
}
