import MainButton from '../MainButton/MainButton';
import styles from './HomeSection.module.css';

export default function HomeSection() {
  return (
    <div className={ styles.home_section }>
      <h1>HI, I AM DANIEL ARTETA</h1>
      <p>I am a Full Stack developer</p>
      <MainButton text={"PROJECTS"} />
    </div>
  );
}
