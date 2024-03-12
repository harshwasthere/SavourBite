import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

export default function Contact() {
    const form = useRef();
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, form.current, {
                publicKey: `${PUBLIC_KEY}`,
            })
            .then(
                () => {
                    toast.success("Message Sent");
                },
                (error) => {
                    toast.error("Message Not Sent");
                },
            );
    };

    return (
        <div className="contact">
            <Toaster richColors position="bottom-right" expand={true} />
            <div className="contact-form-container ">
                <form className="contact-form " ref={form} onSubmit={sendEmail}>
                    <div className="contact-text">
                        <span className="contact-text-heading">Contact Me</span>
                        <span className="contact-text-subheading">
                            Enter the below details to contact.
                        </span>
                    </div>
                    <input type="text" name="user_name" placeholder="Name" />
                    <input type="email" name="user_email" placeholder="Email" />
                    <textarea name="message" placeholder="message you want to send to me..." />
                    <button className="contact-btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
