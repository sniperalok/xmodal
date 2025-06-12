import React, { useState, useRef } from "react";

const Modal = ({ closeModal }) => {
  const [userdetails, setUserdetails] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const modalref = useRef();

  const handleclose = (e) => {
    if (modalref.current === e.target) {
      closeModal(false);
    }
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUserdetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = userdetails;

    if (phone.length < 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number");
      return;
    }

    if (new Date(dob).getTime() >= new Date().getTime()) {
      alert("Invalid date of birth. Date of birth cannot be in the future");
      return;
    }

    alert(`${username} ${email} ${phone} ${dob}`);
    closeModal(false);
  };

  return (
    <div className="modal" ref={modalref} onClick={handleclose}>
      <div className="modal-content">
        <h1 className="formTitle">Fill Details</h1>
        <form className="form" onSubmit={handlesubmit}>
          <div className="formdiv">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={userdetails.username}
              onChange={handlechange}
            />
          </div>
          <div className="formdiv">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={userdetails.email}
              onChange={handlechange}
            />
          </div>
          <div className="formdiv">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              value={userdetails.phone}
              onChange={handlechange}
            />
          </div>
          <div className="formdiv">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              required
              value={userdetails.dob}
              onChange={handlechange}
            />
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
