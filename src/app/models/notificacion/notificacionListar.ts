import { NotificacionService } from "app/services/notificacion/notificacion.service";
export default class NotificacionListar implements Subscriptor{
    public notificaciones: [] =[]
    private notiService: NotificacionService;

    constructor(){}

    actualizar(data: any) {
       this.notiService.getNotification(data.usu_id).subscribe(data => {
        this.notificaciones = data.results
       })
    }
}