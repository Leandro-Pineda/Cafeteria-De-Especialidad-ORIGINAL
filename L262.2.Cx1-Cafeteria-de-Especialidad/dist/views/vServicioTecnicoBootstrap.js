export default class vServicioTecnicoBootstrap {
    btNuevaOrden;
    tbOrdenes;
    lblIngresoTotal;
    lblPorcentajePantalla;
    lblOrdenMenor;
    constructor() {
        this.btNuevaOrden = document.getElementById("body_btNuevaOrden");
        this.tbOrdenes = document.getElementById("body_tbOrdenes");
        this.lblIngresoTotal = document.getElementById("body_lblIngresoTotal");
        this.lblPorcentajePantalla = document.getElementById("body_lblPorcentajePantalla");
        this.lblOrdenMenor = document.getElementById("body_lblOrdenMenor");
    }
    onNuevaOrden(callback) {
        this.btNuevaOrden.onclick = callback;
    }
    reportar({ orden, cliente, monto, ingresoTotal, porcentajePantalla, ordenMenorMonto, }) {
        // Agregar fila a la tabla de órdenes
        const fila = document.createElement("tr");
        fila.innerHTML = `
      <td>${orden}</td>
      <td>${cliente}</td>
      <td class="text-end">$${monto.toFixed(2)}</td>
    `;
        this.tbOrdenes.appendChild(fila);
        // Actualizar resumen
        this.lblIngresoTotal.innerHTML = `$${ingresoTotal.toFixed(2)}`;
        this.lblPorcentajePantalla.innerHTML = `${porcentajePantalla.toFixed(2)}%`;
        this.lblOrdenMenor.innerHTML = ordenMenorMonto;
    }
}
//# sourceMappingURL=vServicioTecnicoBootstrap.js.map