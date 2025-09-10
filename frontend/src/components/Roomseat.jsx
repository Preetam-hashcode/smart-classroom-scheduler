import React, { useState } from "react";
import "../styles/RoomSeat.module.scss";

function Roomseat({ room, userRole, onBook }) {
  const [hover, setHover] = useState(false);

  let seatClass = "seat";
  if (room.status === "available") seatClass += " available";
  else if (room.status === "booked") seatClass += " booked";
  else if (room.status === "soon") seatClass += " soon";

  // Only teachers can click to book and only on available
  const clickable = userRole === "teacher" && room.status === "available";

  return (
    <div
      className={`${seatClass} ${clickable ? "clickable" : ""}`}
      onClick={clickable ? onBook : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ cursor: clickable ? "pointer" : "default", position: "relative" }}
    >
      <span className="seat-label">{room.name}</span>
      {
        hover && (
          <div className="seat-tooltip">
            {room.status === "available" && <span>Available</span>}
            {room.status === "booked" && (
              <>
                <span>Booked By: <b>{room.bookedBy}</b></span><br />
                <span>Until: <b>{room.endTime}</b></span>
              </>
            )}
            {room.status === "soon" && (
              <>
                <span>Now: <b>{room.bookedBy}</b></span><br />
                <span>Vacant In: <b>{room.availableIn} hour</b></span>
              </>
            )}
            {clickable && <button className="seat-book-btn">Book Room</button>}
          </div>
        )
      }
    </div>
  );
}

export default Roomseat;
