let amount = 130;

function hitTheLottery(amountToWithdraw){
    let countBills = {};
    let denomination = [100, 20, 10, 5, 1];
    let aux = [];
    aux[0] = amountToWithdraw;
    let resultado;

    for(let i = 0; i < denomination.length; i++){
        let operacion = Math.trunc(aux[i]/denomination[i]);
        if( operacion % 1 == 0){
            aux.push((aux[i] - (denomination[i] * operacion)));
            countBills[denomination[i]] = operacion;
        }
    }
    console.log(countBills);
    resultado = Object.values(countBills).reduce(function(a, b){ return a + b });
    return resultado
}

console.log(hitTheLottery(amount)); 