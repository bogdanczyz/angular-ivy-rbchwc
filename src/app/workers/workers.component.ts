import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { workers } from '../app.component';
import { WORKER } from '../WORKER';
import { NewWorkerComponent } from './new-worker/new-worker.component';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css'],
})


export class WorkersComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  workers = workers;
  selectedWorker: WORKER[] | undefined;
  @Output() selectedWorkerEmitter = new EventEmitter();
  ngOnInit(): void {
    this.checkFinishedTasks();
  }
  SelectWorker(): void {
    if (this.selectedWorker)
      this.selectedWorkerEmitter.emit(this.selectedWorker[0]);
  }
  @Input('taskChecker') checkFinishedTasks(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewWorkerComponent, {
      width: '250px',
      data: {
        firstName: '',
        lastName: '',
        position: '',
        tasks: [],
        finishedTasks: [],
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        this.workers.push(result);
        localStorage.setItem('workers', JSON.stringify(this.workers));
      }
    });
  }
}
