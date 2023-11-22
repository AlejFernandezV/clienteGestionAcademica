import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  
    { path: '/dashboard',               title: 'Dashboard',     icon: 'dashboard',    class: '' },
    { path: '/user-profile',            title: 'Perfil',        icon:'person',        class: '' },
    { path: '/table-list',              title: 'Evaluación',    icon:'content_paste', class: '' },
    { path: '/Periodo/listar-periodo',  title: 'Periodo',       icon:'settings',      class: '' },
    { path: '/docente',                 title: 'Docente',       icon:'group',         class: '' },
    { path: '/l_docente/listar-labor',  title: 'Labor Docente', icon:'list_alt',      class: '' },
    //{ path: '/autoevaluacion',          title: 'Autoevaluación',icon:'quiz',          class: '' },
    
    //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
