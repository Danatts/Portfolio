import styles from './MainButton.module.css';

export default function MainButton({ action, text }) {
  return (
    <button
      className={ styles.main_button }
      onClick={ action }
    >
      { text }
    </button>
  );
}
