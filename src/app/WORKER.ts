import { TASK } from './TASK';

export interface WORKER {
  firstName: string;
  lastName: string;
  position: string;
  tasks: TASK[];
  finishedTasks: TASK[];
}
