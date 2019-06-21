const renderProject = (data) => {
  const div = document.createElement('div');
  div.classList.add('project');
  const title = document.createElement('h2');
  title.textContent = data;
  div.appendChild(title);

  return div;
}

export { renderProject }
