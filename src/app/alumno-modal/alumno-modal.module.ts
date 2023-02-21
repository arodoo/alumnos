import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { AlumnoModalPage } from './alumno-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
      path: '',
      component: AlumnoModalPage
    }
    ])
  ],
  declarations: [AlumnoModalPage]
})
export class AlumnoModalPageModule {}
