import React from "react";
import "../styles/BookingModal.scss";

const BookingModal = ({ room, onConfirm, onCancel }) => (
  <div className="modal-overlay">
    <div className="modal-box">
      <h3>Book {room.name}</h3>
      <p>Are you sure you want to book this room?</p>
      <div className="modal-btns">
        <button className="btn-cancel" onClick={onCancel}>Ok</button>
        <button className="btn-confirm" onClick={onConfirm}>Cancel</button>
      </div>
    </div>
  </div>
);

export default BookingModal;
