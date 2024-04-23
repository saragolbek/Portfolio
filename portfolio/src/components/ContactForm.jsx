import React, { useState } from 'react';

const ContactForm = () => {
    const [formStatus, setFormStatus] = useState({ submitted: false, error: false });

    const handleSubmit = (e) => {
        e.preventDefault();

        {/* Submit form data */}
        const form = e.target;
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
        })
            .then((response) => {
                if (response.ok) {
                    setFormStatus({ submitted: true, error: false }); // Success
                    form.reset(); // Reset form fields
                } else {
                    setFormStatus({ submitted: false, error: true }); // Error
                }
            })
            .catch((error) => {
                console.error('Form submission error:', error);
                setFormStatus({ submitted: false, error: true }); // Error
            });
    };

    return (
        <section id="contact" className="container my-5">
            <h2 className="content-header text-center">Contact Me</h2>
            <hr />
            <form
                action="https://formsubmit.co/golbeksara@gmail.com"
                method="POST"
                className="row g-3"
                onSubmit={handleSubmit}
            >
                {/* Name Field */}
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                    />
                </div>

                {/* Email Field */}
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                    />
                </div>

                {/* Message Field */}
                <div className="col-12">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="5"
                        placeholder="Your Message"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </div>

                {/* Confirmation and Error Messages */}
                {formStatus.submitted && (
                    <div className="col-12 mt-3 text-center">
                        <p className="text-success">Thank you!<br/>
                            Your message has been sent successfully. I'll get back to you soon.</p>
                    </div>
                )}
                {formStatus.error && (
                    <div className="col-12 mt-3 text-center">
                        <p className="text-danger">Oops! Something went wrong. Please try again later.</p>
                    </div>
                )}
            </form>
        </section>
    );
};

export default ContactForm;
