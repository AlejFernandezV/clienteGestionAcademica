export default class Publicador {
  private subscriptores: Subscriptor[] = [];

  agregarSubscriptor(subscriptor: Subscriptor): void {
    this.subscriptores.push(subscriptor);
  }

  removerSubscriptor(subscriptor: Subscriptor): void {
    const index = this.subscriptores.indexOf(subscriptor);
    if (index !== -1) {
      this.subscriptores.splice(index, 1);
    }
  }

  notificarSubscriptores(data: any): void {
    for (const subscriptor of this.subscriptores) {
      subscriptor.actualizar(data);
    }
  }
}
