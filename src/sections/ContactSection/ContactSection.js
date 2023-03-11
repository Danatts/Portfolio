import MainButton from '@/components/atoms/MainButton/MainButton';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <div className={styles.contact_section}>
      <h1>CONTACT</h1>
      <p>Do you want to talk? Submit the form below and I will get back to you as soon as possible</p>
      <form className={styles.contact_section__form} action={'https://formsubmit.co/danielatts97@gmail.com'} method={'POST'}>
        <label>
          Name
          <input name={'name'} type={'text'} placeholder={'Name'} />
        </label>
        <label>
          Email
          <input name={'email'} type={'text'} placeholder={'Email'} />
        </label>
        <label>
          Message
          <textarea name={'message'} placeholder={'Message'} rows={10} />
        </label>
        <MainButton type={'submit'} text={'SUBMIT'} />
      </form>
    </div>
  );
}

