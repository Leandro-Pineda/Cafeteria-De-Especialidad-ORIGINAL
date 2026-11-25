// CLASE MENOR BASE — mReparacion.ts
// Representa una orden de reparación genérica.
// Contrato polimórfico: cada hija debe implementar monto().
//Clase abstracta??
// Esta clase representa una orden de reparación genérica, así que la colocamos abstracta para que 
// no pueda ser instanciada directamente. Solo se pueden crear instancias de sus clases hijas.
export class mBebida {
    _nombre;
    _precioBase;
    _tipo;
    constructor({ nombre, precioBase, tipo, }) {
        this._nombre = nombre.trim();
        this._precioBase = +precioBase;
        this._tipo = tipo.trim();
    }
    set nombre(nombre) {
        this._nombre = nombre.trim();
    }
    get nombre() {
        return this._nombre;
    }
    set precioBase(precioBase) {
        this._precioBase = +precioBase;
    }
    get precioBase() {
        return this._precioBase;
    }
    set tipo(tipo) {
        this._tipo = tipo.trim();
    }
    get tipo() {
        return this._tipo;
    }
}
//# sourceMappingURL=mBebida.js.map