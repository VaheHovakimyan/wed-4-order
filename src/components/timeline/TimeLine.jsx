import "./TimeLine.scss";
import React from "react";

const Divider = () => {
  return (
    <div className="divider"></div>
  )
}

const TimeLine = () => {
  return (
    <div className="timeline_main">
      <div className="timeline_main_opacity">
        <h2 className="timeline_title">Timeline</h2>
        <div className="time_items_div">

        <div className="time_item">
            <p className="time_item_number">11:00 AM</p>
            <p className="time_item_location">Հարսի տուն</p>
          </div>

          <Divider />

          <div className="time_item">
            <p className="time_item_number">3:00 PM</p>
            <p className="time_item_location">Եկեղեցի</p>
          </div>

          <Divider />

          <div className="time_item">
            <p className="time_item_number">6:00 PM</p>
            <p className="time_item_location">Ռեստորան</p>
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
