export interface UsuarioUpdateI{   
    usu_num_doc_old: number;
    usu_num_doc_new?: number;
    usu_tipo_doc: string;
    usu_email: string;
    rol_id: number;
    usu_nombre: string;
    usu_apellido: string;
    usu_genero: string;
    usu_estudio: string;
    usu_estado:string;
}