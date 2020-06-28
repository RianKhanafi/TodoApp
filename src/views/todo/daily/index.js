import React from "react";
import { DailyCard, AddCard } from "../../../component";
const Daily = (props) => {
  return (
    <>
      <span className="text-3xl quicksand">Today’s Schedule</span>
      <br />
      <span className="text-3xl quicksand text-primary">Thursday 11</span>
      <DailyCard />
      <DailyCard />
      <DailyCard mainCard={false} list={true} />
      <DailyCard mainCard={false} paragraph={true} />
      <AddCard />
    </>
  );
};

export default Daily;
