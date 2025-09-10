// src/components/RoomBoxGrid.jsx
import React from "react";
import BookingPopover from "./BookingPopover";

function BookingGrid({ rooms }) {
  return (
    <div className="room-grid">
      {rooms.map(room => (
        <BookingPopover room={room} key={room.id} />
      ))}
    </div>
  );
}

export default BookingGrid;
