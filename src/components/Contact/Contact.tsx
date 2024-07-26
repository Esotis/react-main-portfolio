import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { BsEnvelopeFill, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sendSVG from "../../assets/send";
import "./Contact.css";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  //emailJS function, send an email
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9gipejk",
        "template_rut71yn",
        form.current,
        "dYwBogtDgMXjRsOCT"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          //notification toast if success sending the email
          const resolveAfter2Sec = new Promise((resolve, reject) =>
            setTimeout(resolve, 2000)
          );
          toast.promise(
            resolveAfter2Sec,
            {
              pending: "Sending your message...",
              success: "Your message has been sent 😎",
            },
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            }
          );
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          //notification toast if fail sending the email
          const rejectAfter2Sec = new Promise((resolve, reject) =>
            setTimeout(reject, 2000)
          );
          toast.promise(
            rejectAfter2Sec,
            {
              pending: "Sending your message...",
              error: "Fail to send the message 😭",
            },
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            }
          );
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Get in touch</h2>
      <span className="section-subtitle">Contact me</span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Talk to me</h3>

          <div className="contact-info">
            <div className="contact-card">
              <BsEnvelopeFill className="contact-card-icon" />

              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">jovananggata1@gmail.com</span>

              <a
                href="mailto:jovananggata1@gmail.com"
                className="contact-button"
              >
                Mail me{" "}
                <i className="uil uil-arrow-right contact-button-icon"></i>
              </a>
            </div>

            <div className="contact-card">
              <BsWhatsapp className="contact-card-icon" />

              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">+6285640812345</span>

              <a
                href="https://wa.link/c5oa0i"
                target="_blank"
                className="contact-button"
              >
                Chat me{" "}
                <i className="uil uil-arrow-right contact-button-icon"></i>
              </a>
            </div>

            <div className="contact-card">
              <BsFacebook className="contact-card-icon" />

              <h3 className="contact-card-title">Facebook</h3>
              <span className="contact-card-data">Jovananggata</span>

              <a
                href="https://www.facebook.com/jovananggata.jovananggata?mibextid=ZbWKwL"
                target="_blank"
                className="contact-button"
              >
                See me{" "}
                <i className="uil uil-arrow-right contact-button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">Send me a Message 👇</h3>

          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="contact-form-div">
              <label htmlFor="name" className="contact-form-tag">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                className="contact-form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact-form-div">
              <label htmlFor="email" className="contact-form-tag">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                className="contact-form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact-form-div">
              <label htmlFor="project" className="contact-form-tag">
                Message
              </label>
              <textarea
                name="message"
                id="project"
                cols={30}
                rows={10}
                className="contact-form-input text-input"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button type="submit" className="button button-flex">
              Send Message {sendSVG}
            </button>

            <ToastContainer stacked />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
