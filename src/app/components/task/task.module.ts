import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    DecimalPipe,
    FormsModule,
  ],
})
export class TaskModule {}
