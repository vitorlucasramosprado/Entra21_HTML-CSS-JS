
    let multiplicador = prompt("Digite um número: ");

    if (multiplicador > 0 && multiplicador <= 10) {
        for (let i = 0; i < 11; i++) {
    
            let resultado = i * multiplicador;
            console.log(multiplicador + "x" + i + "=" + resultado);
        }
    }else{
        alert("Dados inválidos");
    
}
        