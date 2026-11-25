import { iCafeteria } from "../interfaces/iCafeteria.js";

export default class vCafeteriaPlain implements iCafeteria {
  private btNuevaBebida: HTMLButtonElement;
  private listaBebidas: HTMLElement;
  private lblMontoTotalVenta: HTMLElement;
  private lblCantidadBebidaPrecioMayor4: HTMLElement;

  constructor() {
    this.btNuevaBebida = document.getElementById("cafeteria_btNuevaBebida") as HTMLButtonElement;
    this.listaBebidas = document.getElementById("cafeteria_listaBebidas") as HTMLElement;
    this.lblMontoTotalVenta = document.getElementById("cafeteria_lblMontoTotalVenta") as HTMLElement;
    this.lblCantidadBebidaPrecioMayor4 = document.getElementById(
      "cafeteria_lblCantidadBebidaPrecioMayor4",
    ) as HTMLElement;
  }

  onNuevaBebida(callback: () => void): void {
    this.btNuevaBebida.onclick = callback;
  }

  reportar({
    nombre,
    tipo,
    monto,
    montoTotalVenta,
    cantidadBebidaPrecioMayor4,
  }: {
    nombre: string;
    tipo: string;
    monto: number;
    montoTotalVenta: number;
    cantidadBebidaPrecioMayor4: number;
  }): void {
    const item = document.createElement("p");
    item.textContent = `${nombre} (${tipo}): $${monto.toFixed(2)}`;
    this.listaBebidas.appendChild(item);

    this.lblMontoTotalVenta.textContent = `$${montoTotalVenta.toFixed(2)}`;
    this.lblCantidadBebidaPrecioMayor4.textContent = String(cantidadBebidaPrecioMayor4);
  }
}
