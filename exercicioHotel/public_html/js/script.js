valor = 0;
tipoCama = "";
tipoQuarto = "";
item = "";
function addQuarto(quarto) {
    if (quarto === "suite") {
        valor = 300;
        tipoQuarto = "Suite";
    } else if (quarto === "standard") {
        valor = 150;
        tipoQuarto = "Standard";
    } else {
        valor = 0;

    }
}

function addCama(cama) {
    if (cama === "solteiro") {
        tipoCama = "solteiro";
    } else if (cama === "casal") {
        tipoCama = "casal";
    }
}

function addValor(nome) {
    if (nome === "tv") {
        item = item +" "+"TV";
    } else if (nome === "ar") {
        item = item +" "+"Ar condicionado";
        valor = valor + 20;
    } else if (nome === "closet") {
        item = item +" "+"Closet";
    } else if (nome === "tvAcabo") {
        item = item +" "+" TV a cabo";
    }
}


function exibe() {
    alert("Quarto " + tipoQuarto + " Valor: R$ " + valor +
            " Cama: " + tipoCama + " Extras: " + item);
}


function alteraFonte(){
    document.getElementById("fonte")
            .style.fontFamily='tahoma';  
}

function corFundo(){
   document.getElementById("fundo")
            .style.backgroundColor='yellow';
}

