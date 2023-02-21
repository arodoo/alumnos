import { Alumno, AlumnoService } from './../services/alumno.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AlumnoModalPage } from '../alumno-modal/alumno-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  alumnos: Alumno[] = [];
  constructor(private service: AlumnoService,
              private alertCtrl: AlertController,
              private modalConttrl: ModalController) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.alumnos = response;
      console.log(response);
    })
  }

  borrarAlumno(id: string){
    console.log(id);
    this.alertCtrl.create({
      header: 'Eliminar',
      message: '¿Seguro padrino?',
      buttons: [
        {
          text: 'Smn',
          handler: () => {
            this.service.remove(id).subscribe(()=> {
              this.alumnos = this.alumnos.filter(std => std.id !==id);
            });
          }
        },
        {
          text: 'Nelson'
        }
      ]
    }).then(alertEl => alertEl.present());
    }

    agregarAlumno(){
      this.modalConttrl.create({
        component: AlumnoModalPage
      }).then(modal => {
        modal.present();
        return modal.onDidDismiss();
      }).then(/*res => console.log(res)*/({data, role}) =>{
        if(role === 'creado'){
          this.alumnos.push(data);
        }
      });
    }

    actualizarAlumno(alumno: Alumno){
      this.modalConttrl.create({
        component: AlumnoModalPage,
        componentProps: {alumno}
      }).then(modal => modal.present());
    }
}
