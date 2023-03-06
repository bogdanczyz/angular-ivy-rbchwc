import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { WorkersComponent } from './workers/workers.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewWorkerComponent } from './workers/new-worker/new-worker.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    TasksComponent,
    NewWorkerComponent,
    NewTaskComponent,
  ],
  imports: [
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
