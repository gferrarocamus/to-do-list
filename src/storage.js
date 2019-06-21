const getStorage = () => {
  return JSON.parse(localStorage.getItem("projects"));
};

const setStorage = (data) => {
  localStorage.setItem('projects', JSON.stringify(data));
};

export { getStorage, setStorage }
