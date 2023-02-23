import styles from './MainButton.module.css';

export default function MainButton({ text }) {
  return (
    <button className={ styles.main_button }>{ text }</button>
  );
}
