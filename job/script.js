//создание обёртки
let div = document.createElement('div');
div.className = "wapper";
document.body.append(div);
//создание формы
let form = document.createElement('form');
form.className = "formClass";
let findDiv = document.querySelector(".wapper");
findDiv.append(form);
//метод сборки input с разными типами
let collector = {
    teg(classInput, typeInput) {
      let input = document.createElement('input');
      input.className = classInput;
      input.type = typeInput;
      let findForm = document.querySelector(".formClass");
      findForm.append(input);
  }
}
//метод сборки описания
let labelCollector = {
  tegLabel(Class, Name) {
    let p = document.createElement('p');
    p.className = "description";
    p.innerHTML = Name;
    let findForm = document.querySelector(".formClass");
    findForm.append(p);
  }
}

//массивы с данными: превое - опимание в <p>
//                   второе - классы для input
//                   третье - имя тега

var mydata = JSON.parse(data);

let arrayName = ["Название светодиода:","Номер светодиода"];
// Можно выбрать порядок создания элемента. Пример: mydata[3].class И  mydata[2].class И *.type
let arrayClass = [mydata[0].class, mydata[1].class, mydata[3].class, mydata[2].class];
let arrayType = [mydata[0].type ,mydata[1].type, mydata[3].type, mydata[2].type];

//цикл для создания
for(i = 0; i < arrayClass.length; i++){
  if (i < 2){
      labelCollector.tegLabel(arrayClass[i], arrayName[i]);
    }
      collector.teg(arrayClass[i], arrayType[i]);
}
