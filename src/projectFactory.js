import { getStorage, setStorage } from './storage';

const projectFactory = (id, name, toDos) => {

  return { id, name, toDos }
};

const setDefaultProject = () => {
  const defaultProject = projectFactory(1, 'My Project', []);
  const projects = [defaultProject];
  if (getStorage() === null) {
    setStorage(projects);
  }
};

const getId = () => {
  const storage = getStorage();
  if (storage === null) {
    return 1;
  }
  return storage.length + 1;
};

const addProject = (e) => {
  e.preventDefault();
  const form = document.querySelector('.projectForm');

  const project = projectFactory(getId(), form.title.value, []);

  const projects = getStorage();
  projects.push(project);
  setStorage(projects);
};

export { addProject, setDefaultProject }
