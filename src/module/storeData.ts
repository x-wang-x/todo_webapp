const getData = (key: string): [] => {
  return JSON.parse(localStorage.getItem(key) || "{}");
};
const setData = (key: string, item: string) => {
  localStorage.setItem(key, item);
};
const search = (key: string, name = "", query: string): [] => {
  const data = getData(key);
  const res: [] = [];
  data.map((item) => {
    if (item[name]==query){
      res.push(item)
    }
  });
  return res;
};
export { getData, setData, search };
