export default class mCafeteria {
    acumMontoTotal = 0;
    cntBebida = 0;
    cntBebidaVendida = 0;
    acumAzucar = 0;
    procesarBebida(b) {
        this.acumMontoTotal += b.montoTotal();
        this.cntBebidaVendida++;
        this.acumAzucar += b.gramosAzucar();
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
    get promedioAzucar() {
        if (this.cntBebidaVendida === 0)
            return 0;
        return this.acumAzucar / this.cntBebidaVendida;
    }
}
//# sourceMappingURL=mCafeteria.js.map