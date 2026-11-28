export interface iCafeteria {
  onNuevaBebida(callback: () => void): void;
  reportar(datos: {
    nombre: string;
    tipo: string;
    azucar:number
    monto: number;
    montoTotalVenta: number;
    cantidadBebidaPrecioMayor4: number;
  }): void;
}
