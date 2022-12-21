export const checkRut = (rut) =>{
    //Valor acumulado para el calculo de la formula
    var nAcumula = 0;
    //Factor por el cual se debe multiplicar el valor de la posicion
    var nFactor = 2;
    //Dígito verificador
    var nDv = 0;
    //extraemos el ultimo numero o letra que corresponde al verificador
    //La K corresponde a 10
    if (rut.charAt(rut.length - 1).toUpperCase() === 'K' )
        var nDvReal = 10;
    //el 0 corresponde a 11
    else if (rut.charAt(rut.length - 1) === 0 )
        nDvReal = 11;
    else
        nDvReal = rut.charAt(rut.length - 1);
        for (var nPos = rut.length -2; nPos >=0; nPos--)
    {
        nAcumula += rut.charAt(nPos).valueOf() * nFactor;
        nFactor++;
                if (nFactor > 7) nFactor = 2;
    }
 
    nDv = 11-(nAcumula % 11)
    if (nDv === nDvReal)
        return true;
        return false;
}
