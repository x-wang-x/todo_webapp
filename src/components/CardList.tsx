import { Fragment } from "react";
import Card from "./Card";
import { getData } from "../module/storeData";

const CardList = () => {
  const datas = getData("data")
  const cards = (
    <>
      {datas.map((item, idx: number) => (
        <Fragment key={idx}>
          <Card title={item['title']} content={item['content']} />
        </Fragment>
      ))}
    </>
  );
  return <>{cards}</>;
};

export default CardList;