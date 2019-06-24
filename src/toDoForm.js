import { getStorage } from './storage';
import { addAndClean } from './addAndClean';

const renderToDoForm = () => {
  const form = document.createElement('form');
  form.classList.add('toDoForm');
  const titleLabel = document.createElement('label');
  const title = document.createElement('input');
  title.setAttribute('name', 'title');
  const descriptionLabel = document.createElement('label');
  const description = document.createElement('input');
  description.setAttribute('name', 'description');
  description.setAttribute('type', 'textarea');
  const priorityLabel = document.createElement('label');
  const priority = document.createElement('select');
  priority.setAttribute('name', 'priority');
  const option1 = document.createElement("option");
  option1.setAttribute("value", "Low priority");
  option1.textContent = "Low priority";
  const option2 = document.createElement("option");
  option2.setAttribute("value", "Normal priority");
  option2.textContent = "Normal priority";
  const option3 = document.createElement("option");
  option3.setAttribute("value", "High priority");
  option3.textContent = "High priority";
  priority.appendChild(option1);
  priority.appendChild(option2);
  priority.appendChild(option3);
  const dateLabel = document.createElement('label');
  const date =  document.createElement('input');
  date.setAttribute('type', 'date');
  date.setAttribute('name', 'date');
  const btn = document.createElement('button');
  btn.addEventListener('click', addAndClean, false);
  const projectLabel = document.createElement('label');
  const project =  document.createElement('select');
  project.setAttribute('name', 'project');
  const projects = getStorage();
  projects.forEach((p) => {
    let o = document.createElement("option");
    o.setAttribute("value", p.id);
    o.textContent = p.name;
    project.appendChild(o);
  })

  const elements = [
    [titleLabel, "Title:"],
    [descriptionLabel, "Description"],
    [priorityLabel, "Select Priority: "],
    [dateLabel, "Date: "],
    [btn, "Add To-Do Item"],
    [projectLabel, "Select Project: "]
  ];
  elements.forEach((element) => {
    element[0].textContent = element[1];
  });

  const all = [titleLabel, title, descriptionLabel, description, priorityLabel, priority, dateLabel, date, projectLabel, project, btn ];
  all.forEach((element) => {
    form.appendChild(element);
  });

  const main = document.getElementById('toDos');
  main.appendChild(form);
}

export { renderToDoForm }
