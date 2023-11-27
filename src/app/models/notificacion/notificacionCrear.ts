import { NotificacionService } from "app/services/notificacion/notificacion.service";
import { notificacionI } from "./notificacion.interface";

export default class NotificacionCrear implements Subscriptor{
    public noti_id: number;
    public usu_id: number;
    public noti_content: string;
    public noti_ruta: string;
    public noti_estado: string;
    private notiService: NotificacionService;

    constructor(data:any){
        this.noti_id = data.noti_id;
        this.usu_id = data.usu_id;
        this.noti_content = data.noti_content;
        this.noti_ruta = data.noti_ruta;
        this.noti_estado = data.noti_estado;
    }

    actualizar(data: any) {
        let dataNoti: notificacionI = {
            usu_id: data.usu_id,
            noti_content: `Se le asignó una evaluación para ${data.lab_nombre}`,
            noti_ruta: '/table-list',
            noti_estado: 'Pendiente'
        }
        this.notiService.postNotification(dataNoti).subscribe()
    }
}