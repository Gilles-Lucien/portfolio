import React, { useState } from "react";
import "./styles.css";
import copy from "../../assets/svg/copy.svg";
import Button from "../Button";

export default function ContactForm() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [showSubmitTooltip, setShowSubmitTooltip] = useState(false);
  const [showErrorTooltip, setShowErrorTooltip] = useState(false);

  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const email = "gpeltier2@gmail.com";

  ///// ajout pour netlify form
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", emailInput, messageInput }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  };

  ///// fin ajout pour netlify form

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX + 20, y: e.clientY - 60 });
  };

  const submit = (event) => {
    event.preventDefault();
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
    }, 2000);
  };

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(email);
    e.target.focus();
    setCursorPosition({ x: e.clientX + 20, y: e.clientY - 60 });
    document.addEventListener("mousemove", handleMouseMove);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
      document.removeEventListener("mousemove", handleMouseMove);
    }, 2000);
  };

  return (
    <section className="contactSection">
      <div className="contactSection__container">
        <h2>
          Contact <span>to keep in touch</span>
        </h2>
        <div className="contactSection__container__mailAndForm">
          <div className="contactSection__container__mailAndForm--mail">
            <p>Copy my email:</p>
            <div>
              <p id="contactMail" onClick={copyToClipboard}>
                gpeltier2@gmail.com
              </p>{" "}
              <img
                src={copy}
                alt="copy email to clipboard"
                onClick={copyToClipboard}
              />
            </div>
            {showTooltip && (
              <div
                className="toolTip"
                style={{
                  position: "fixed",
                  top: cursorPosition.y,
                  left: cursorPosition.x,
                }}
              >
                Copied to clipboard!
              </div>
            )}
          </div>
          <div className="contactSection__container__mailAndForm--form">
            <p>Or use this form:</p>
            <form
              className="contactForm"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(emailInput, messageInput);
                submit();
              }}
              name="contact"
              netlify
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
                  reminder : connect the form to a backend to send the email.
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
              <Button type="submit" onClick={submit} className="sendButton">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
