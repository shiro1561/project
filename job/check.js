let button = document.querySelector(".buttonClass");
button.value = "Отправить";
// функция проверки
button.onclick = function() {
  //checkbox
  let input_check = document.querySelector(".checkboxClass");

  let input_1 = document.querySelector(".inputClassName");
  let input_2 = document.querySelector(".inputClassNamber");
  // изменение цвета
  if (input_check.checked == true){
    alert("checkbox включен");
  }
  else {
    alert("checkbox выключен");
  }
  if (input_1.value == ""){
    input_1.style.cssText=`
      border-color: red;
  `;
  }
  else{
    input_1.style.cssText=`
      border-color: black;
  `;
  }

  if (input_2.value == ""){
    input_2.style.cssText=`
      border-color: red;
  `;
  }
  else{
    input_2.style.cssText=`
      border-color: black;
  `;
  }
  // вывод сообщения
  if(((input_1.value) && (input_2.value)) != ""){
  alert("Всё хорошо!!!");
}
else {
    if ((input_1.value == "" ) && (input_2.value == "")){
      alert("Оба поля не заполнены!" );
    }
    else if (input_1.value == "") {
      alert("Вы не заполнили первое поле!" );
    }
    else {
      alert("Вы не заполнили второе поле!" );
    }

}
};
