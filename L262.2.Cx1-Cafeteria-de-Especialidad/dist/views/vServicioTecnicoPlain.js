export default class vServicioTecnicoPlain {
    vista;
    btNuevaOrden;
    listaOrdenes;
    lblIngresoTotal;
    lblPorcentajePantalla;
    lblOrdenMenor;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevaOrden = document.getElementById("body_btNuevaOrden");
        this.listaOrdenes = document.getElementById("body_listaOrdenes");
        this.lblIngresoTotal = document.getElementById("body_lblIngresoTotal");
        this.lblPorcentajePantalla = document.getElementById("body_lblPorcentajePantalla");
        this.lblOrdenMenor = document.getElementById("body_lblOrdenMenor");
    }
    onNuevaOrden(callback) {
        this.btNuevaOrden.onclick = callback;
    }
    reportar({ orden, cliente, monto, ingresoTotal, porcentajePantalla, ordenMenorMonto, }) {
        // Agregar línea de orden procesada
        const item = document.createElement("div");
        item.innerHTML = `Orden ${orden} (${cliente}): <strong>$${monto.toFixed(2)}</strong>`;
        this.listaOrdenes.appendChild(item);
        // Actualizar resumen
        this.lblIngresoTotal.innerHTML = `$${ingresoTotal.toFixed(2)}`;
        this.lblPorcentajePantalla.innerHTML = `${porcentajePantalla.toFixed(2)}%`;
        this.lblOrdenMenor.innerHTML = ordenMenorMonto;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=vServicioTecnicoPlain.js.map