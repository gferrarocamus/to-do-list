const renderProjectForm = () => {
  const form = document.createElement('form');
  form.classList.add('form');
  const nameLabel = document.createElement('label');
  const name = document.createElement('input');
  const btn = document.createElement('button');

  nameLabel.textContent = "Project Name: ";
  btn.textContent = "Add Project";
  [nameLabel, name, btn].forEach((element) => {
    form.appendChild(element);
  });

  return form;
}

export { renderProjectForm }