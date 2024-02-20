import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { RiMailSendFill } from "react-icons/ri";

export default function Contact() {
  const handleBlur = (event) => {
    console.log(event.target);
    let type = event.target.getAttribute("name");
    console.log(type);
    if (event.target.value === "") {
      alert("All fields required to send message ⚠️");
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5d1uzmj",
        "template_5f44yck",
        form.current,
        "O2U3wxHSSiv-EdDFM"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message sent ✅");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="custom-contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="custom-contact-form">
        <label className="custom-label">
          <span>Name:</span>
          <input
            className="custom-input"
            type="name"
            name="name"
            onBlur={handleBlur}
            required
          />
        </label>
        <label className="custom-label">
          <span>Email:</span>
          <input
            className="custom-input"
            type="email"
            name="email"
            onBlur={handleBlur}
            required
          />
        </label>
        <label className="custom-label">
          <span>Message:</span>
          <textarea
            className="custom-input custom-textarea"
            type="text"
            name="message"
            onBlur={handleBlur}
            required
          ></textarea>
        </label>
        <button className="custom-submit-btn">
          <RiMailSendFill className="custom-submit-icon" />
        </button>
      </form>
    </div>
  );
}
