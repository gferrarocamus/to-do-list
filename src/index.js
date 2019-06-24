import { renderToDo } from './toDos';
import { renderProjectForm } from './projectForm';
import { renderToDoForm } from './toDoForm';
import { setDefaultProject } from './projectFactory';
import { renderProjects } from './projects';
import './css/styles.css';


setDefaultProject();
renderProjectForm();
renderToDoForm();
renderProjects();
