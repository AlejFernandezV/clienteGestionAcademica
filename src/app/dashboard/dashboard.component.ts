import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'app/services/reporte.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private reporte: ReporteService) { }
  downloadFile?
  
  ngOnInit() {
    
  }

  createReport(){
    this.reporte.getReporte().subscribe(
      res => {
        this.downloadFile(res, "application/pdf");
      },
      err => console.log(err)
    );
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: "Reporte generado",
      text: "Descargando reporte",
      showConfirmButton: false,
      timer: 2000,
    })
  }
}
