import { renderToDo } from './toDos';
import { renderProjectForm } from './projectForm';
import { renderToDoForm } from './toDoForm';
import { setDefaultProject } from './projectFactory';
import './css/styles.css';

// const data = [
//   "Title",
//   "Description",
//   "Priority",
//   "19/06/2019",
// ];
//
// const toDo = renderToDo(data);
//
// const toDos = document.getElementById('toDos');
// toDos.appendChild(toDo);


setDefaultProject();
renderProjectForm();
renderToDoForm();
