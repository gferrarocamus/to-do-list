import { getStorage, setStorage } from './storage';

const toDoFactory = (id, title, check, description, priority, date) => {
  return { 
    id, 
    title, 
    check, 
    description, 
    priority, 
    date 
  };
};

const getToDoId = () => {
  const storage = getStorage();
  if (storage === null) {
    return 1;
  } else {
    let count = 1;
    storage.forEach((project) => {
      count += project.toDos.length;
    });
    return count;
  }
};

const toggleChecked = (e) => {
  const id = e.target.parentNode.getAttribute('data-index');
  const storage = getStorage();
  storage.forEach((project) => {
    project.toDos.forEach((toDo) => {
      if (toDo.id === +id) {
        toDo.check = !toDo.check;
      }
    });
  });
  setStorage(storage);
};

const findToDo = (id) => {
  const storage = getStorage();
  let found;
  storage.forEach((project) => {
    project.toDos.forEach((toDo) => {
      if (toDo.id === +id) {
        found = toDo;
      }
    });
  });
  return found;
};

const updateStorage = (id, form) => {
  const storage = getStorage();
  storage.forEach((project) => {
    project.toDos.forEach((toDo) => {
      if (toDo.id === +id) {
        toDo.title = form.title.value;
        toDo.description = form.description.value;
        toDo.priority = form.priority.value;
        toDo.date = form.date.value;
      }
    });
  });
  setStorage(storage);
};

const deleteFromStorage = (id) => {
  const storage = getStorage();
  storage.forEach((project) => {
    project.toDos = project.toDos.filter(toDo => toDo.id !== id);
  });
  setStorage(storage);
};

const addToDo = () => {
  const form = document.querySelector('.toDoForm');

  const toDo = toDoFactory(
    getToDoId(),
    form.title.value,
    false,
    form.description.value,
    form.priority.value,
    form.date.value,
  );
  const projectId = +form.project.value;
  const projects = getStorage();
  const project = projects.find((p) => p.id === projectId);
  project.toDos.push(toDo);
  setStorage(projects);
};

export { 
  addToDo, 
  toDoFactory, 
  toggleChecked, 
  findToDo, 
  updateStorage, 
  deleteFromStorage 
};
