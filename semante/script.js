function alterarNome() {
    let trocarNome = document.getElementById('inputNome').value;

    if (trocarNome === '') {
        alert('Digite seu Nome!')
    } else {
        document.getElementById('nome').innerHTML = trocarcurso;
    }
    function alterarcurso() {
        let trocarcurso = document.getElementById('inputcurso').value;
    
        if (trocarCurso === '') {
            alert('Digite seu curso!')
        } else {
            document.getElementById('nomeCurso').innerHTML = trocarcurso;
        }function alterarstatus() {
            let trocarstatus = document.getElementById('inputstatus').value;
        
            if (trocarstatus === '') {
                alert('Digite seu status!')
            } else {
                document.getElementById('nomestatus').innerHTML = trocarstatus;
            }
}