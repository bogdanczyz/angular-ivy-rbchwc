import { Component, OnChanges } from '@angular/core';
import { sampleWorkers } from './sampleWorkers';
import { WORKER } from './WORKER';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  ngOnChanges() {
    this.workers = JSON.parse(
      localStorage.getItem('workers') || JSON.stringify(sampleWorkers)
    );
  }
  workers = workers;
  
  selectedWorker: WORKER | null = null;
  checkFinishedTasks(): void {
    this.workers.map((worker) => {
      worker.finishedTasks =
        worker.tasks.filter((task) => task.status === 'Zakończone') || [];
      localStorage.setItem('workers', JSON.stringify(this.workers));
      return worker;
    });
  }
  selectedWorkerReciver(worker: WORKER): void {
    this.selectedWorker = worker;
  }
}


export const workers: WORKER[] = JSON.parse(
  localStorage.getItem('workers') || JSON.stringify(sampleWorkers)
);
