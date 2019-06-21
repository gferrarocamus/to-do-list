const renderToDo = (data) => {
  const div = document.createElement('div');
  div.classList.add('toDo');
  const title = document.createElement('h3');
  const description = document.createElement('p');
  const priority = document.createElement('p');
  const date = document.createElement('p');

  const elements = [title, description, priority, date];
  elements.forEach((element, i) => {
    element.textContent = data[i];
  });

  elements.forEach((element) => {
    div.appendChild(element);
  });
  return div;
}

export { renderToDo }