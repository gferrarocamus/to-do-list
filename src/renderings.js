import { addProject } from './projectFactory';
import { 
  addToDo, 
  findToDo, 
  updateStorage, 
  deleteFromStorage 
} from './toDoFactory';
import { renderProjects } from './projects';
import { renderToDos } from './toDos';
import { renderToDoForm } from './toDoForm';
import { renderToDoEditForm } from './toDoEditForm';

const formCleaner = (form) => {
  [...form.children].forEach((child) => {
    if (child.type === 'text') child.value = '';
  });
};

const deleteRendered = (parent, children) => {
  const container = document.getElementById(parent);
  const divs = document.querySelectorAll(children);
  [...divs].forEach((div) => {
    container.removeChild(div);
  });
};

const showProjectForm = (e) => {
  e.target.classList.remove('visible');
  const form = document.querySelector('.projectForm');
  form.classList.add('visible');
};

const hideProjectForm = () => {
  const btnAdd = document.getElementById('addProjectBtn');
  btnAdd.classList.add('visible');
  const form = document.querySelector('.projectForm');
  form.classList.remove('visible');
};

const addAndClean = (e) => {
  e.preventDefault();
  if ([...e.target.classList].includes('projectForm')) {
    addProject();
    formCleaner(document.querySelector('.projectForm'));
    deleteRendered('projects', '#projects > div');
    deleteRendered('projects', '#projects > button');
    renderProjects();
    const active = document.querySelector('.project:nth-last-child(2)');
    active.classList.add('active');
    hideProjectForm();
    deleteRendered('toDosForm', '#toDosForm > form');
    renderToDoForm();
    deleteRendered('toDos', '#toDos > div');
  } else if ([...e.target.classList].includes('toDoForm')) {
    addToDo();
    const form = document.querySelector('.toDoForm');
    const id = +form.project.value;
    [...form.children].forEach((subForm) => {
      formCleaner(subForm);
    });
    deleteRendered('toDos', '#toDos > div');
    renderToDos(id);
  }
};

const cleanAndRender = (e) => {
  const project = e.target.closest('div');
  if (!project) return;
  const projects = document.getElementsByClassName('project');
  const projectId = project.getAttribute('data-index');

  [...projects].forEach((p) => {
    if (p !== project) p.classList.remove('active');
  });

  project.classList.add('active');
  deleteRendered('toDos', '#toDos > div');
  renderToDos(+projectId);
};

const setDefaultActive = () => {
  const project = document.getElementsByClassName('project')[0];
  project.classList.add('active');
};

const showDetails = (details) => {
  [...details].forEach((detail) => {
    if ([...detail.classList].indexOf('details') > -1) {
      detail.classList.toggle('hidden');
    }
  });
};

const showDetailsFromTitle = (e) => {
  const details = e.target.parentNode.children;
  showDetails(details);
};

const showDetailsFromDiv = (e) => {
  const details = e.target.children;
  showDetails(details);
};

const editToDo = (e) => {
  const parent = e.target.parentNode;
  const children = e.target.parentNode.children;
  [...children].forEach((child) => {
    parent.removeChild(child);
  });
  const toDo = findToDo(parent.getAttribute('data-index'));
  renderToDoEditForm(toDo, parent);
};

const saveChanges = (e) => {
  e.preventDefault();
  const parent = e.target.parentNode;
  const form = document.querySelector('.toDoEditForm');
  const id = parent.getAttribute('data-index');
  updateStorage(id, form);
  const index = parent.getAttribute('project-index');
  deleteRendered('toDos', '#toDos > div');
  renderToDos(+index);
};

const removeToDo = (e) => {
  if (confirm('Are you sure you want to delete this item?')) {
    const parent = e.target.parentNode;
    const id = parent.getAttribute('data-index');
    deleteFromStorage(+id);
    const index = parent.getAttribute('project-index');
    deleteRendered('toDos', '#toDos > div');
    renderToDos(+index);
  }
};

export {
  addAndClean,
  cleanAndRender,
  showProjectForm,
  showDetailsFromTitle,
  showDetailsFromDiv,
  editToDo,
  saveChanges,
  removeToDo,
  setDefaultActive,
};
