const getData = (key: string): [] => {
  return JSON.parse(localStorage.getItem(key) || "{}");
};
const setData = (key: string, item: object | string) => {
  const datas = getData(key);
  if (datas.length == undefined) {
    localStorage.setItem(key, JSON.stringify([item]));

  } else {
    datas.push(item as never);
    localStorage.setItem(key, JSON.stringify(datas));
  }
};
const search = (key: string, name = "", query: string): [] => {
  const data = getData(key);
  const res: [] = [];
  data.map((item) => {
    if (item[name] == query) {
      res.push(item);
    }
  });
  return res;
};
export { getData, setData, search };
