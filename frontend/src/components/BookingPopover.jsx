// src/components/RoomBox.jsx
import React, { useState } from "react";

function BookingPopover({ room }) {
  const [hover, setHover] = useState(false);

  let boxClass = "room-box";
  if (room.status === "available") boxClass += " available";
  else if (room.status === "booked") boxClass += " booked";
  else if (room.status === "soon") boxClass += " soon";

  return (
    <div
      className={boxClass}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      tabIndex={0}
      style={{ position: "relative" }}
    >
      <span className="room-label">{room.name}</span>
      {hover && (
        <div className="room-popover">
          {room.status === "available" && <span>Available</span>}
          {room.status === "booked" && (
            <span>
              Booked by <b>{room.bookedBy}</b>
              <br />
              until <b>{room.endTime}</b>
            </span>
          )}
          {room.status === "soon" && (
            <span>
              Vacant soon<br />
              now: <b>{room.bookedBy}</b><br />
              available in <b>{room.availableIn}h</b>
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default BookingPopover;
