import MainButton from '@/components/MainButton/MainButton';
import styles from './HomeSection.module.css';

export default function HomeSection() {

  const handleClick = () => {
    const projectSection = document.getElementById('project_section');
    if (projectSection) {
      projectSection.scrollIntoView();
    }
  }


  return (
    <div className={ styles.home_section }>
      <h1>HI, I AM DANIEL ARTETA</h1>
      <p>I am a Full Stack developer</p>
      <MainButton type={'button'} action={ handleClick } text={'PROJECTS'} />
    </div>
  );
}
