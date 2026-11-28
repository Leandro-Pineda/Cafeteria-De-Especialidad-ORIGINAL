export default class vCafeteriaBootstrap {
    btNuevaBebida;
    tbBebidas;
    lblMontoTotalVenta;
    lblCantidadBebidaPrecioMayor4;
    constructor() {
        this.btNuevaBebida = document.getElementById("cafeteria_btNuevaBebida");
        this.tbBebidas = document.getElementById("cafeteria_tbBebidas");
        this.lblMontoTotalVenta = document.getElementById("cafeteria_lblMontoTotalVenta");
        this.lblCantidadBebidaPrecioMayor4 = document.getElementById("cafeteria_lblCantidadBebidaPrecioMayor4");
    }
    onNuevaBebida(callback) {
        this.btNuevaBebida.onclick = callback;
    }
    reportar({ nombre, tipo, azucar, monto, montoTotalVenta, cantidadBebidaPrecioMayor4, }) {
        const fila = document.createElement("tr");
        const celdaNombre = document.createElement("td");
        const celdaTipo = document.createElement("td");
        const celdaAzucar = document.createElement("td");
        const celdaMonto = document.createElement("td");
        celdaNombre.textContent = nombre;
        celdaTipo.textContent = tipo;
        celdaAzucar.textContent = azucar.toFixed(2);
        celdaMonto.className = "text-end";
        celdaMonto.textContent = `$${monto.toFixed(2)}`;
        fila.append(celdaNombre, celdaTipo, celdaAzucar, celdaMonto);
        this.tbBebidas.appendChild(fila);
        this.lblMontoTotalVenta.textContent = `$${montoTotalVenta.toFixed(2)}`;
        this.lblCantidadBebidaPrecioMayor4.textContent = String(cantidadBebidaPrecioMayor4);
    }
}
//# sourceMappingURL=vCafeteriaBootstrap.js.map