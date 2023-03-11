import classes from '@/src/pages/Contact/components/ContactForm/scss/ContactForm.module.scss';
import useContactForm from '@/src/pages/Contact/components/ContactForm/hooks/useContactForm/useContactForm';

function ContactForm() {
  const { values, setFieldValue, onSubmit } = useContactForm();

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              value={values.email}
              onChange={(event) => setFieldValue('email', event.target.value)}
              type="email"
              id="email"
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              value={values.name}
              onChange={(event) => setFieldValue('name', event.target.value)}
              type="text"
              id="name"
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            value={values.message}
            onChange={(event) => setFieldValue('message', event.target.value)}
            id="message"
            rows={5}
            required
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
