import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import validator from 'validator';
import './Form.css';
import 'react-toastify/dist/ReactToastify.css';


export function Form() {
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  function verifyEmail(email) {
    setValidEmail(validator.isEmail(email));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target;
    const email = form.email.value;
    const message = form.message.value;
    const subject = 'Someone checked your profile';

    try {
      const res = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message, subject }),
      });

      if (res.ok) {
        setSucceeded(true);
        toast.success('Email sent successfully!');
        form.reset();
      } else {
        toast.error('Failed to send email!');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong!');
    }

    setSubmitting(false);
  }

  if (succeeded) {
    return (
      <div className="success-container">
        <h3>Thanks for getting in touch!</h3>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to the top
        </button>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => verifyEmail(e.target.value)}
          required
        />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={submitting || !validEmail || !message}
        >
          {submitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
