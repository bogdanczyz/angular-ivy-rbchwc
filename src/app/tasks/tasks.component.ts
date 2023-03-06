import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from './new-task/new-task.component';
import { WORKER } from '../WORKER';
import { workers } from '../app.component';
import { TASK } from '../TASK';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  workers = workers;
  ngOnInit(): void {}
  @Input() worker: WORKER | null = null;
  @Output() taskChange = new EventEmitter();
  options = ['Nie rozpoczęte', 'W toku', 'Zakończone'];

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      width: '250px',
      data: {
        name: '',
        status: 'Nie rozpoczęte',
      },
    });

    dialogRef.afterClosed().subscribe((result: TASK) => {
      console.log(result);
      if (this.worker !== null && result.name !== '') {
        this.worker.tasks.push(result);
        const newWorkers = (this.workers[this.workers.indexOf(this.worker)] =
          this.worker);
        console.log(newWorkers);
        localStorage.setItem('workers', JSON.stringify(newWorkers));
      }
    });
  }
}
