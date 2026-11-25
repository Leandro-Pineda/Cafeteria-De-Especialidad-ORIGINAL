// CLASE MENOR BASE — mReparacion.ts
// Representa una orden de reparación genérica.
// Contrato polimórfico: cada hija debe implementar monto().
export class mReparacion {
    _orden;
    _cliente;
    _costoRepuesto;
    constructor({ orden, cliente, costoRepuesto, }) {
        this._orden = orden.trim();
        this._cliente = cliente.trim();
        this._costoRepuesto = +costoRepuesto;
    }
    get orden() {
        return this._orden;
    }
    get cliente() {
        return this._cliente;
    }
    get costoRepuesto() {
        return this._costoRepuesto;
    }
    // Cargo base de diagnóstico ($5) + costo del repuesto
    get montoBase() {
        return 5 + this.costoRepuesto;
    }
}
//# sourceMappingURL=mReparacion.js.map