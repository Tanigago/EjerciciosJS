let number = 0;
/**
 * 
 * @param {number} number - Es la variable que ya conocemos. 
 * @param {number} sumnumber - Es la NUEVA que necesitamos, por eso le tenemos que poner un nombre diferente a number.
 * @returns {sumnumber} - Solicitamos que nos retorne la nueva variable.
 */
function plusone(sumnumber) {
    number = number + 1;
    return sumnumber;
}

plusone(number);

console.log(number);