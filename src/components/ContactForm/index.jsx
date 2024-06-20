import React, { useState } from "react";
import "./styles.css";
// import Button from "../Button";

export default function ContactForm() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showSubmitTooltip, setShowSubmitTooltip] = useState(false);
  const [showErrorTooltip, setShowErrorTooltip] = useState(false);

  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  ///// ajout pour netlify form
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        email: emailInput,
        message: messageInput,
      }),
    })
      .then(() => console.log("form submited successfully"))
      .catch((error) => alert(error));
  };

  ///// fin ajout pour netlify form

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX + 20, y: e.clientY - 60 });
  };

  const submit = (event) => {
    const emailRegex = /.+@.+/;
    if (!emailRegex.test(emailInput)) {
      setCursorPosition({ x: event.clientX + 20, y: event.clientY - 60 });
      document.addEventListener("mousemove", handleMouseMove);
      setShowErrorTooltip(true);
      setTimeout(() => {
        setShowErrorTooltip(false);
        document.removeEventListener("mousemove", handleMouseMove);
      }, 2500);
      return;
    }
    setEmailInput("");
    setMessageInput("");
    setCursorPosition({ x: event.clientX + 20, y: event.clientY - 60 });
    document.addEventListener("mousemove", handleMouseMove);
    setShowSubmitTooltip(true);
    setTimeout(() => {
      setShowSubmitTooltip(false);
      document.removeEventListener("mousemove", handleMouseMove);
    }, 4000);
  };

  return (
    <section className="contactSection">
      <div className="contactSection__container">
        <h2>
          Contact <span>to keep in touch</span>
        </h2>
        <div className="contactSection__container__mailAndForm">
          <div className="contactSection__container__mailAndForm--form">
            <p>Let me know what you think:</p>
            <form
              className="contactForm"
              name="contact"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e, emailInput, messageInput);
              }}
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@mail.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="What will we do together?"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              {showSubmitTooltip && (
                <div
                  className="toolTip"
                  style={{
                    position: "fixed",
                    top: cursorPosition.y,
                    left: cursorPosition.x,
                  }}
                >
                  Form submitted! I will get back to you soon.
                </div>
              )}
              {showErrorTooltip && (
                <div
                  className="toolTip--error"
                  style={{
                    position: "fixed",
                    top: cursorPosition.y,
                    left: cursorPosition.x,
                  }}
                >
                  Please enter a valid email.
                </div>
              )}
              <button type="submit" className="sendButton" onClick={submit}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
