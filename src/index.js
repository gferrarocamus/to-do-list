import { renderToDo } from './toDos.js'

const data = [
  "Title",
  "Description",
  "Priority",
  "19/06/2019",
];

const toDo = renderToDo(data);

const toDos = document.getElementById('toDos');
toDos.appendChild(toDo);