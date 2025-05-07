import "./TimeLine.scss";
import React from "react";

const Divider = () => {
  return <div className="divider"></div>;
};

const TimeLine = () => {
  return (
    <div className="timeline_main">
      <div className="timeline_main_opacity">
        <h2 className="timeline_title">Ժամանակացույց</h2>
        <div className="time_items_div">
          <div className="time_item">
            <p className="time_item_number">14:30 PM</p>
            <p className="time_item_location">Եկեղեցի</p>
          </div>

          <Divider />

          <div className="time_item">
            <p className="time_item_number">17:30 PM</p>
            <p className="time_item_location">Հարսանյանց սրահ</p>
          </div>

          <Divider />

          <div className="time_item">
            <p className="time_item_number">23:00 PM</p>
            <p className="time_item_location">Ավարտ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
