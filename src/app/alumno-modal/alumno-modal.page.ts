import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Alumno, AlumnoService } from '../services/alumno.service';

@Component({
  selector: 'app-alumno-modal',
  templateUrl: './alumno-modal.page.html',
  styleUrls: ['./alumno-modal.page.scss'],
})
export class AlumnoModalPage implements OnInit {

  @Input() alumno: Alumno[] = [];
  isUpdate= false;

  data ={
    nombre: '',
    correo: '',
    telefono: ''
  }

  constructor(private modalCtrl: ModalController,
              private service: AlumnoService,) { }

  ngOnInit() {
   /* if(this.alumno){
      this.isUpdate = true;
      this.data = this.alumno;
    }*/
  }

  onSubmit(form: NgForm){
    const alumno = form.value;
    this.service.create(alumno).subscribe(response => {
      this.modalCtrl.dismiss(response, 'creado');
    });
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }

}
