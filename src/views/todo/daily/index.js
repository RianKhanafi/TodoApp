import React from "react";
import { DailyCard, AddCard } from "../../../component";
const Daily = (props) => {
  return (
    <>
      <span className="text-2xl">Today’s Schedule</span>
      <br />
      <span className="text-2xl">Thursday 11</span>
      <DailyCard />
      <DailyCard />
      <DailyCard mainCard={false} list={true} />
      <DailyCard mainCard={false} paragraph={true} />
      <AddCard />
    </>
  );
};

export default Daily;
