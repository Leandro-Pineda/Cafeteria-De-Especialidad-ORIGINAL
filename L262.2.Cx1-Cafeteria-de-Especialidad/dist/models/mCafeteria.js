export default class mCafeteria {
    acumMontoTotal = 0;
    cntBebida = 0;
    procesarBebida(b) {
        this.acumMontoTotal += b.montoTotal();
        if (b.montoTotal() > 4) {
            this.cntBebida++;
        }
    }
    get montoTotalVenta() {
        return this.acumMontoTotal;
    }
    get cantidadBebidaPrecioMayor4() {
        return this.cntBebida;
    }
}
//# sourceMappingURL=mCafeteria.js.map