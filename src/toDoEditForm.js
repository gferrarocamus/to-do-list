import { saveChanges } from './renderings';
import './css/toDoEditForm.css';

const renderToDoEditForm = (toDo, main) => {
  const form = document.createElement('form');
  form.classList.add('toDoEditForm');
  const titleLabel = document.createElement('label');
  const title = document.createElement('input');
  title.setAttribute('name', 'title');
  title.value = toDo.title;
  title.required = true;
  const descriptionLabel = document.createElement('label');
  const description = document.createElement('input');
  description.setAttribute('name', 'description');
  description.value = toDo.description;
  description.required = true;
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
  priority.value = toDo.priority;
  const dateLabel = document.createElement('label');
  const date =  document.createElement('input');
  date.setAttribute('type', 'date');
  date.setAttribute('name', 'date');
  date.required = true;
  date.value = toDo.date;
  const btn = document.createElement('button');
  btn.setAttribute('id', 'saveBtn');

  const elements = [
    [titleLabel, "Title: "],
    [descriptionLabel, "Description: "],
    [priorityLabel, "Priority: "],
    [dateLabel, "Date: "],
    [btn, "Save"],
  ];
  elements.forEach((element) => {
    element[0].textContent = element[1];
  });

  const all = [titleLabel, title, descriptionLabel, description, priorityLabel, priority, dateLabel, date, btn ];
  all.forEach((element) => {
    form.appendChild(element);
  });

  form.addEventListener('submit', saveChanges);
  main.appendChild(form);
}

export { renderToDoEditForm }
