import { Injectable } from '@angular/core';
import { l_docente } from '../models/l_docente/docente';


const listDocente =[
  { "id": 1, 
    "lb_Tipo": "Tiempo completo", 
    "lb_Nombre": "Juan Pérez", 
    "lb_Horas": 40 
  },
  { "id": 2, 
    "lb_Tipo": "Tiempo ", 
    "lb_Nombre": "Juan ", 
    "lb_Horas": 6 
  },
   
]
@Injectable({
  providedIn: 'root'
})




export class LDocenteService {

  constructor() { }


  obtenerDocentes() {
    return listDocente;
  }

  agregarDocente(L_docente: l_docente) {
    listDocente.push(L_docente);
  }

  editDocente(docenteEditado :l_docente){
    const index =listDocente.findIndex(L_docente =>L_docente.id ===docenteEditado.id)
    listDocente[index] = docenteEditado;
  }

 
  

  eliminarLaborDocente(id: number) {
    const indice = listDocente.findIndex(docente => docente.id === id);
  
    if (indice !== -1) {
      listDocente.splice(indice, 1);
    }
  }

}
