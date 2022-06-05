let input = 36;

function dataCenter(targetArea){
let resultado = 0;
let auxiliar = 0;
    if(targetArea % 2 != 0){
        resultado = 2 * (targetArea + 1);
    } else{
        auxiliar = Math.sqrt(targetArea);
        resultado = auxiliar * 4;
    }
    return resultado;
}

console.log(dataCenter(input));