import styles from './MainButton.module.css';

export default function MainButton({ action, type, text }) {
  return (
    <button
      className={ styles.main_button }
      onClick={ action }
      type={ type }
    >
      { text }
    </button>
  );
}
