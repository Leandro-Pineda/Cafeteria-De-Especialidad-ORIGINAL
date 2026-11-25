export default class vReparacionBootstrap {
    inOrden;
    inCliente;
    inCostoRepuesto;
    selTipo;
    chkOled;
    chkReciclaje;
    rowOled;
    rowReciclaje;
    btCancelar;
    btAceptar;
    modal;
    constructor() {
        this.inOrden = document.getElementById("rep_inOrden");
        this.inCliente = document.getElementById("rep_inCliente");
        this.inCostoRepuesto = document.getElementById("rep_inCostoRepuesto");
        this.selTipo = document.getElementById("rep_selTipo");
        this.chkOled = document.getElementById("rep_chkOled");
        this.chkReciclaje = document.getElementById("rep_chkReciclaje");
        this.rowOled = document.getElementById("rep_rowOled");
        this.rowReciclaje = document.getElementById("rep_rowReciclaje");
        this.btCancelar = document.getElementById("rep_btCancelar");
        this.btAceptar = document.getElementById("rep_btAceptar");
        const elementoModal = document.getElementById("reparacion");
        this.modal = new bootstrap.Modal(elementoModal);
        // Mostrar/ocultar campos según tipo de servicio
        this.selTipo.onchange = () => this.actualizarCampos();
    }
    actualizarCampos() {
        if (this.selTipo.value === "pantalla") {
            this.rowOled.hidden = false;
            this.rowReciclaje.hidden = true;
        }
        else {
            this.rowOled.hidden = true;
            this.rowReciclaje.hidden = false;
        }
    }
    get orden() {
        return this.inOrden.value.trim();
    }
    get cliente() {
        return this.inCliente.value.trim();
    }
    get costoRepuesto() {
        return this.inCostoRepuesto ? +this.inCostoRepuesto.value : 0;
    }
    get tipoPantalla() {
        return this.selTipo.value === "pantalla";
    }
    get esOled() {
        return this.chkOled.checked;
    }
    get reciclaje() {
        return this.chkReciclaje.checked;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        this.inOrden.value = "";
        this.inCliente.value = "";
        this.inCostoRepuesto.value = "";
        this.selTipo.value = "pantalla";
        this.chkOled.checked = false;
        this.chkReciclaje.checked = false;
        this.actualizarCampos();
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
}
//# sourceMappingURL=vReparacionBootstrap.js.map