import useContactForm from '@/src/pages/Contact/components/ContactForm/hooks/useContactForm/useContactForm';
import classes from '@/src/pages/Contact/components/ContactForm/scss/ContactForm.module.scss';

function ContactForm() {
  const { values, isLoading, setFieldValue, onSubmit } = useContactForm();

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
              disabled={isLoading}
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
              disabled={isLoading}
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
            disabled={isLoading}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Send Message'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
