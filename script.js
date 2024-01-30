window.onload = function(){

    let prev  = document.querySelector('.prev');
    let next  = document.querySelector('.next');
    let box   = document.querySelector('.box');
    let dados = document.querySelector('#dados')
    let degree = 0;
    
    prev.addEventListener('click',function(){
        degree += 90;
        box.style = `transform: perspective(1000px) rotateY(${degree}deg);`;
    })
    next.addEventListener('click',function(){
        degree -= 90;
        box.style = `transform: perspective(1000px) rotateY(${degree}deg);`;
    })
    dados.addEventListener('mouseup',function(){
        var valorFracionado = Math.random();
        var valorFinal = Math.floor(valorFracionado * (7 - 3 + 1)) + 3;

        degree += 90 * valorFinal;
        box.style = `transform: perspective(1000px) rotateY(${degree}deg);`;
    })
}