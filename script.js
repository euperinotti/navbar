//recebe o nome do botao clicado
function open_all(parameter){
    parameter = document.querySelector('.cont-' + parameter);
    //executa a funcao de toggle
    display(parameter);
}

//funcao de toggle do display
function display(item){
    const mainDiv = document.getElementById('content');
    mainDiv.style.display = 'flex';
    
    if (item.style.display == 'none'){
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
}