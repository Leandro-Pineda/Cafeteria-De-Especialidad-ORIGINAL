import { mBebida } from "./mBebida.js";
export class mCafeCaliente extends mBebida {
    _lecheVegetal;
    constructor({ nombre, precioBase, tipo, lecheVegetal, }) {
        super({ nombre, precioBase, tipo });
        this._lecheVegetal = lecheVegetal;
    }
    set lecheVegetal(lecheVegetal) {
        this._lecheVegetal = lecheVegetal;
    }
    get lecheVegetal() {
        return this._lecheVegetal;
    }
    montoTotal() {
        if (this.lecheVegetal === true) {
            return this.precioBase + 0.75;
        }
        else {
            return this.precioBase;
        }
    }
    gramosAzucar() {
        const azucar = super.gramosAzucar();
        if (this.lecheVegetal === true) {
            return azucar / 2;
        }
        else {
            return azucar;
        }
    }
    tipoBebida() {
        return "Caliente";
    }
}
//# sourceMappingURL=mCafeCaliente.js.map