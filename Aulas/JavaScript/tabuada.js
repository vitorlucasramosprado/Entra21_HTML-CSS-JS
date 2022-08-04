console.log("1º linha do arquivo js")

function calcular(){
    //pega o valor od input do formulario
    let tab1 = document.getElementById("tab1").value;
    let tab2 = document.getElementById("tab2").value;

    //validação dos valores caso o primeiro seja menor que o segundo
    if (tab2<tab1) {
        let aux = tab2;
        tab2 = tab1;
        tab1 = aux;
    }

    //criar um elemento UL no HTML da pagina
    const container = document.createElement("ul");

    do {
        
        for (let index = 1; index <= 10; index++) {
            let linha = document.createElement("li");
            linha.className = "tab" + tab1
            let result = tab1 + "x" + index + " = " + tab1*index;
            linha.appendChild(document.createTextNode(result));
        
            container.appendChild(linha);    
        }
        tab1++
    } while (tab1<=tab2);

    //adicionando o container dentro do elemento body
    document.body.appendChild(container);

}
