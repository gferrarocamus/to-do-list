import { getStorage, setStorage } from "./storage";

const toDoFactory = (id, title, description, priority, date) => {
  return { id, title, description, priority, date };
};

const getToDoId = () => {
  const storage = getStorage();
  if (storage === null) {
    return 1;
  } else {
    let count = 1;
    storage.forEach(project => {
      count += project.toDos.length;
    });
    return count;
  }
};

const addToDo = () => {
  const form = document.querySelector(".toDoForm");

  const toDo = toDoFactory(
    getToDoId(),
    form.title.value,
    form.description.value,
    form.priority.value,
    form.date.value
  );
  const projectId = +form.project.value;
  const projects = getStorage();
  let project = projects.find(p => p.id === projectId);
  project.toDos.push(toDo);
  console.log(projects);
  setStorage(projects);
};

export { addToDo, toDoFactory };
