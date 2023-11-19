const getData = (key: string): [] => {
  return JSON.parse(localStorage.getItem(key) || "{}");
};
const setData = (key: string, item: string) => {
  localStorage.setItem(key, item);
};
export { getData, setData };
