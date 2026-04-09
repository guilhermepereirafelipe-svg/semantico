function alterarNome() {
    let trocarNome = document.getElementById('inputNome').value;

    if (trocarNome === '') {
        alert('Digite seu Nome!')
    } else {
        document.getElementById('nome').innerHTML = trocarcurso;
    }
}
    function alterarcurso() {
        let trocarcurso = document.getElementById('inputcurso').value;
    
        if (trocarCurso === '') {
            alert('Digite seu curso!')
        } else {
            document.getElementById('nomeCurso').innerHTML = trocarcurso;
        }
    }
        function alterarstatus() {
            let trocarstatus = document.getElementById('inputstatus').value;
        
            if (trocarstatus === '') {
                alert('Digite seu status!')
            } else {
                document.getElementById('nomestatus').innerHTML = trocarstatus;
            }
        }

            function mudarCorHeader() {
                let cor = document.getElementById('corHeader').value;
                document.querySelector('.cabecalho').style.backgroundColor = cor;

                

            }

            
            function mudarCornavegação() {
                let cor = document.getElementById('cornavegação').value;
                document.querySelector('.navegacao').style.backgroundColor = cor;

                

            }
             function mudarCorseção() {
                let cor = document.getElementById('corseção').value;
                document.querySelector('.seção').style.backgroundColor = cor;

                

            }
        
             function mudarCorrodapé() {
                let cor = document.getElementById('corrodapé').value;
                document.querySelector('.rodapé').style.backgroundColor = cor;

                

            }

            
