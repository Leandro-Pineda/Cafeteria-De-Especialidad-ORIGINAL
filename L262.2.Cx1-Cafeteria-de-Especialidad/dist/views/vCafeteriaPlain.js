export default class vCafeteriaPlain {
    btNuevaBebida;
    listaBebidas;
    lblMontoTotalVenta;
    lblCantidadBebidaPrecioMayor4;
    constructor() {
        this.btNuevaBebida = document.getElementById("cafeteria_btNuevaBebida");
        this.listaBebidas = document.getElementById("cafeteria_listaBebidas");
        this.lblMontoTotalVenta = document.getElementById("cafeteria_lblMontoTotalVenta");
        this.lblCantidadBebidaPrecioMayor4 = document.getElementById("cafeteria_lblCantidadBebidaPrecioMayor4");
    }
    onNuevaBebida(callback) {
        this.btNuevaBebida.onclick = callback;
    }
    reportar({ nombre, tipo, monto, montoTotalVenta, cantidadBebidaPrecioMayor4, }) {
        const item = document.createElement("p");
        item.textContent = `${nombre} (${tipo}): $${monto.toFixed(2)}`;
        this.listaBebidas.appendChild(item);
        this.lblMontoTotalVenta.textContent = `$${montoTotalVenta.toFixed(2)}`;
        this.lblCantidadBebidaPrecioMayor4.textContent = String(cantidadBebidaPrecioMayor4);
    }
}
//# sourceMappingURL=vCafeteriaPlain.js.map