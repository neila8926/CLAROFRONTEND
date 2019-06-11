import { Component, OnInit } from '@angular/core';
import { RecargaService } from '../../../../services/recarga.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public valor: any;
  public numero: any;
  public btn1: Array<any> = [1000, 2000, 3000, 5000];
  public btn2: Array<any> = [10000, 20000, 30000, 50000];
  public bolsa: string;
  public bolsas: string[] = ['saldo', 'comision', 'incentivo'];
  constructor(
    private recargaService: RecargaService,
    public notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.valor = null;
    this.numero = null;
    const usuario = localStorage.getItem('usuario');
  }

  setValue(valor: any) {
    this.valor = valor;
  }

  recargar() {
    if (this.numero == null && this.valor == null && this.bolsa == null || !this.numero ||  !this.valor || !this.bolsa) {
      this.notificationService.warn('Ingrese los valores para realizar la recarga');
    } else {
      this.recargaService.recarga(this.numero, this.valor, this.bolsa).subscribe(
        response => {
          console.log(response);
          this.notificationService.success(':: Recarga realizada con éxito');
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
