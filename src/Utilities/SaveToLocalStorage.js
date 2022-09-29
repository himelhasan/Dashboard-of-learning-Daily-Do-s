const setToLs = (value) => {
  localStorage.setItem("break-time", value);
};

const getFromLs = () => {
  const value = localStorage.getItem("break-time");
  return value;
};

export { setToLs, getFromLs };
