import { iCafeteria } from "../interfaces/iCafeteria.js";

export default class vCafeteriaBootstrap implements iCafeteria {
  private btNuevaBebida: HTMLButtonElement;
  private tbBebidas: HTMLElement;
  private lblMontoTotalVenta: HTMLElement;
  private lblCantidadBebidaPrecioMayor4: HTMLElement;

  constructor() {
    this.btNuevaBebida = document.getElementById("cafeteria_btNuevaBebida") as HTMLButtonElement;
    this.tbBebidas = document.getElementById("cafeteria_tbBebidas") as HTMLElement;
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
    const fila = document.createElement("tr");
    const celdaNombre = document.createElement("td");
    const celdaTipo = document.createElement("td");
    const celdaMonto = document.createElement("td");
    celdaNombre.textContent = nombre;
    celdaTipo.textContent = tipo;
    celdaMonto.className = "text-end";
    celdaMonto.textContent = `$${monto.toFixed(2)}`;
    fila.append(celdaNombre, celdaTipo, celdaMonto);
    this.tbBebidas.appendChild(fila);

    this.lblMontoTotalVenta.textContent = `$${montoTotalVenta.toFixed(2)}`;
    this.lblCantidadBebidaPrecioMayor4.textContent = String(cantidadBebidaPrecioMayor4);
  }
}
