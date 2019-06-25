import { getStorage, setStorage } from "./storage";
import { toDoFactory } from "./toDoFactory";

const projectFactory = (id, name, toDos) => {
  return { id, name, toDos };
};

const setDefaultProject = () => {
  const d = new Date().toDateString();
  const defaultToDo = toDoFactory(
    1,
    "sample task",
    false,
    "give feedback to developer",
    "low priority",
    d
  );
  const defaultProject = projectFactory(1, "My Project", [defaultToDo]);
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

const addProject = () => {
  const form = document.querySelector(".projectForm");

  const project = projectFactory(getId(), form.title.value, []);

  const projects = getStorage();
  projects.push(project);
  setStorage(projects);
};

export { addProject, setDefaultProject };
