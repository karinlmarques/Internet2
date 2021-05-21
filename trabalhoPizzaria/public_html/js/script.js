
function mostraTamanho() {
    document.getElementById("tamanho").style.display = "block";
    document.getElementById("sabor").style.display = "none";
    document.getElementById("tipoMassa").style.display = "none";
    document.getElementById("borda").style.display = "none";
    document.getElementById("total").style.display = "none";
    document.getElementById("mostraTamanho").disabled = false;
    document.getElementById("mostraSabores").disabled = true;
    document.getElementById("mostraMassa").disabled = true;
    document.getElementById("mostraBorda").disabled = true;
    document.getElementById("mostraTotal").disabled = true;
}

function mostraSabores() {
    document.getElementById("tamanho").style.display = "none";
    document.getElementById("sabor").style.display = "block";
    document.getElementById("tipoMassa").style.display = "none";
    document.getElementById("borda").style.display = "none";
    document.getElementById("total").style.display = "none";
    document.getElementById("mostraTamanho").disabled = true;
    document.getElementById("mostraSabores").disabled = false;
    document.getElementById("mostraMassa").disabled = true;
    document.getElementById("mostraBorda").disabled = true;
    document.getElementById("mostraTotal").disabled = true;
}

function mostraMassa() {
    document.getElementById("tamanho").style.display = "none";
    document.getElementById("sabor").style.display = "none";
    document.getElementById("tipoMassa").style.display = "block";
    document.getElementById("borda").style.display = "none";
    document.getElementById("total").style.display = "none";
    document.getElementById("mostraTamanho").disabled = true;
    document.getElementById("mostraSabores").disabled = true;
    document.getElementById("mostraMassa").disabled = false;
    document.getElementById("mostraBorda").disabled = true;
    document.getElementById("mostraTotal").disabled = true;
}
function mostraBorda() {
    document.getElementById("tamanho").style.display = "none";
    document.getElementById("sabor").style.display = "none";
    document.getElementById("tipoMassa").style.display = "none";
    document.getElementById("borda").style.display = "block";
    document.getElementById("total").style.display = "none";
    document.getElementById("mostraTamanho").disabled = true;
    document.getElementById("mostraSabores").disabled = true;
    document.getElementById("mostraMassa").disabled = true;
    document.getElementById("mostraBorda").disabled = false;
    document.getElementById("mostraTotal").disabled = true;
}
function mostraTotal() {
    document.getElementById("tamanho").style.display = "none";
    document.getElementById("sabor").style.display = "none";
    document.getElementById("tipoMassa").style.display = "none";
    document.getElementById("borda").style.display = "none";
    document.getElementById("total").style.display = "block";
    document.getElementById("mostraTamanho").disabled = true;
    document.getElementById("mostraSabores").disabled = true;
    document.getElementById("mostraMassa").disabled = true;
    document.getElementById("mostraBorda").disabled = true;
    document.getElementById("mostraTotal").disabled = false;
    document.getElementById("exibaTudo").innerHTML = "<b>Tamanho:</b> " + tam + "</br> <b>Valor:</b> R$" + valor
            + "</br> <b>Sabores: </b>" + sabor + "</br> <b>Massa:</b> " + tipoMassa + "</br><b> Borda:</b> " + borda + saborDaBorda;
}
var tam = '';
var sabor = '';
var tipoMassa = '';
var borda = '';
var saborDaBorda = '';
var valor = 0;
var total;
function addTamanho(tamanho) {
    if (tamanho === "pequena") {
        tam = "Pequena";
        valor = 25,00;
    } else if (tamanho === "media") {
        tam = "Média";
        valor = 30,00;
    } else if (tamanho === "grande") {
        tam = "Grande";
        valor = 35,00;
    }
}
    
function addSabor(itemCheck) {
    if (itemCheck === "calabresa") {
        sabor += "</br> Calabresa ";
    }
    if (itemCheck === "bacon") {
        sabor += "</br> Bacon";
    }
    if (itemCheck === "fricasse") {
        sabor += "</br> Fricassê";
    }
    if (itemCheck === "lombo") {
        sabor += "</br> Lombo";
    }
    if (itemCheck === "portuguesa") {
        sabor += "</br> Portuguesa";
    }
    if (itemCheck === "queijo") {
        sabor += "</br> Quatro Queijos";
    }
    if (itemCheck === "brigadeiro") {
        sabor += "</br> Brigadeiro";
    }
    if (itemCheck === "charge") {
        sabor += "</br> Charge";
    }
    if (itemCheck === "mms") {
        sabor += "</br> Chocolate com MMS";
    }
    if (itemCheck === "morango") {
        sabor += "</br> Chocolate com morango";
    }
    if (itemCheck === "moleque") {
        sabor += "</br> Pé de moleque";
    }
    if (itemCheck === "julieta") {
        sabor += "</br> Romeu e Julieta";
    }
    return sabor;
}

function addMassa(massa) {
    if (massa === "integral") {
        tipoMassa = "Integral";
    } else if (massa === "tradicional") {
        tipoMassa = "Tradicional";
    }
}

function addBorda(opborda) {
    if (opborda === "nao") {
        borda = "não";
        document.getElementById("opcheddar").disabled = true;
        document.getElementById("opcatupiry").disabled = true;
    } else if (opborda === "sim") {
        borda = "sim";
        document.getElementById("opcheddar").disabled = false;
        document.getElementById("opcatupiry").disabled = false;
    }
}
function saborBorda(saborBorda) {
    if (document.getElementById('opsim').checked === true) {
        if (saborBorda === "cheddar") {
            saborDaBorda = "</br><b>Sabor da Borda:</b> Cheddar";
            valor = valor+3,00;
        } else if (saborBorda === "catupiry") {
            saborDaBorda = "</br><b>Sabor da Borda:</b> Catupiry";
            valor = valor+3,00;
        }
    } else if (document.getElementById('opnao').checked === true) {
        saborDaBorda = "</br><b>Sabor da Borda:</b> Sem borda";
    }
}

function limparRadios(radio1) {
    if (document.getElementById('opnao').checked === true) {
        for (i = 0; i < document.form1[radio1].length; i++)
            document.form1[radio1][i].checked = false;
        saborDaBorda = "</br><b>Sabor da Borda:</b> Sem borda";
    }
}

function resposta() {
    alert("Pedido realizado com sucesso!");
}

function teste() {
    if (document.getElementById('pequena').checked === false
            && document.getElementById('media').checked === false
            && document.getElementById('grande').checked === false) {
        alert("Marque uma opção!");
        mostraTamanho();
    }
}
function testeSabor() {
    if (document.getElementById('bacon').checked === false
            && document.getElementById('calabresa').checked === false
            && document.getElementById('lombo').checked === false
            && document.getElementById('fricasse').checked === false
            && document.getElementById('portuguesa').checked === false
            && document.getElementById('queijo').checked === false
            && document.getElementById('brigadeiro').checked === false
            && document.getElementById('prestigio').checked === false
            && document.getElementById('mms').checked === false
            && document.getElementById('morango').checked === false
            && document.getElementById('moleque').checked === false
            && document.getElementById('julieta').checked === false) {
        alert("Marque uma opção!");
        mostraSabores();
    }
}
function testeMassa() {
    if (document.getElementById('integral').checked === false
            && document.getElementById('tradicional').checked === false) {
        alert("Marque uma opção!");
        mostraMassa();
    }
}

function testeBorda() {
    if (document.getElementById('opsim').checked === false
            && document.getElementById('opnao').checked === false) {
        alert("Marque uma opção!");
        mostraBorda();

    }
}

function testeSaborBorda() {
    if (document.getElementById('opsim').checked === true) {
        if (document.getElementById('opcheddar').checked === false
                && document.getElementById('opcatupiry').checked === false) {
            alert("Marque uma opção!");
            mostraBorda();
        }
    }
}

 window.onload = function () {
        var b = document.getElementsByName('itemCheck');
        for (var x = 0; x < b.length; x++) {
            b[x].onclick = function () {
                var count = 0;
                for (var y = 0; y < b.length; y++)
                    if (b[y].checked)
                        count++;
                if (count >= 1 && document.getElementById('pequena').checked===true) {
                    for (var y = 0; y < b.length; y++) {
                        if (!b[y].checked)
                            b[y].disabled = true;
                    }
                } else if (count >= 2 && document.getElementById('media').checked===true) {
                    for (var y = 0; y < b.length; y++) {
                        if (!b[y].checked)
                            b[y].disabled = true;
                    }
                }else if (count >= 3 && document.getElementById('grande').checked===true) {
                    for (var y = 0; y < b.length; y++) {
                        if (!b[y].checked)
                            b[y].disabled = true;
                    }
                }else{
                    for (var y = 0; y < b.length; y++)
                        b[y].disabled = false;
                }
            };
        }
    };