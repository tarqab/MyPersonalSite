import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="contact">
      <form
        className="form-contact"
        method="POST"
        action="https://getform.io/f/9bf2e617-2358-495a-bd2e-6c3b1ed79c93"
      >
        <div className="py-6">
          <p className="tittle-contact">Contact</p>
        </div>
        <input
          className="pl-1  bg-gray-200 mx-12 w-auto h-10 rounded-lg"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="pl-1  bg-gray-200 my-8 mx-12 w-auto h-10 rounded-lg"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          name="message"
          id=""
          className="pl-1 bg-gray-200 mx-12 w-auto  rounded-lg"
          rows="10"
          placeholder="Message"
          type="tex t"
        ></textarea>
        <button className="btn-contact">Send message</button>
      </form>
    </div>
  );
};

export default Contact;
