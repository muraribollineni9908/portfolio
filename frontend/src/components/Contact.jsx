
import { useState } from 'react';
import './Contact.css';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('http://127.0.0.1:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.detail || 'Failed to send message');
      }

      setStatus('Message sent successfully!');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      setStatus(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact" id="contact">

      <div className="contact-heading">
        <p>GET IN TOUCH</p>
        <h2>Contact <span>Me</span></h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Let's Work Together</h3>

          <p>
            I'm interested in DevOps opportunities,
            cloud technologies and automation.
            Feel free to contact me.
          </p>

          <p>Email: muraribollineni004@gmail.com</p>
          <p>Location: India</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status && (
            <p role="status">{status}</p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;
