let a = document.querySelector(".conteiner");
let innerP = document.querySelector(".inner");
let check = true;
let proverka = 0;

function tick(){
  if(proverka == 0){
    if(a.style.marginLeft == "100px"){
      a.style.marginLeft = "0px";
    }
    else {
      a.style.marginLeft = "100px";
    }
  }
  else if (proverka == 1)  {
    document.addEventListener('keydown', function(event) {
    innerP.innerHTML = "Молодцы!";
    if (event.code == 'KeyA') {
      a.style.marginLeft = "0px";
    }
    else if (event.code == 'KeyD') {
      a.style.marginLeft = "250px"
    }
    });
}
}


innerP.innerHTML = "Нажмите, пожалуйста, на SPACE";

document.addEventListener('keydown', function(event) {
  if (event.code == 'Space' && check) {

      proverka = 1;
      a.style.paddingTop = "10px";
      a.style.transition = "1s";
      a.parentNode.style.backgroundColor = "#FAE6DF";
      innerP.innerHTML = "Теперь попробуйте A и D";

      check = false;
  }
});

 setInterval(tick, 2000);
