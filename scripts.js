let chooseButton = document.getElementById('choose')
let paragraph = document.getElementById("par");
let paragraph2 = document.getElementById("par2");
let url =
  "https://us-central1-todo-list-napoleonit.cloudfunctions.net/webApi/api/v1/"

const chooseItem = (task) => {    
    chooseButton.innerText = task
}

let showToDos = () => {
  chooseButton.innerText = 'Выберите опцию'
    fetch(url + "getToDos", { method: "GET" })
      .then(response => response.json())
      .then(responseText => {
        paragraph.innerHTML = ''  
        responseText.forEach(element => {
              let listItem = document.createElement('li')
              listItem.innerText = element.label
              element.completed ? listItem.classList.add('completed') : listItem.classList.add('not-completed')
              //listItem.setAttribute('id', counter()); //delete
              listItem.addEventListener('click', () => element.completed ? chooseItem('Дело сделано') : chooseItem(`Не забыть ${element.label.toLowerCase()}`))
              paragraph.append(listItem)
          });
        paragraph2.innerText = JSON.stringify(responseText)
      });
  };



chooseButton.onclick = showToDos;

//прятать, показывать поле с заданиями



/*
let number = 0

let counter = () => {
    number++;
    return 'task_'+number;
};

let deleteItem = (id) => {
    document.getElementById(id).remove();
}

let addtext = () => {
    let li = document.createElement('li');
    let task = input.value;
    li.appendChild(document.createTextNode(task));
    li.setAttribute('id', counter());
    li.addEventListener('click', () => deleteItem(li.id));
    console.log(li.id);
    list.appendChild(li);
    input.value = '';
}

let button = document.getElementById('press');
button.addEventListener('click', addtext);

*/