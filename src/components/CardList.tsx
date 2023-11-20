import { Fragment } from "react";
import Card from "./Card";
import { search } from "../module/storeData";
interface props  {
    id : number;
}
const CardList = ({id} : props) => {
  const datas = search('index','group_id',id.toString())
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