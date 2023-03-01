import styles from './SectionTemplate.module.css';
//import background from 'public/images/bg.webp';

export default function SectionTemplate({ id, children }) {
  return (
    <div 
      className= {styles.section_template}
      id={id}
      //style={{
      //  backgroundImage: `url(${background.src})`,
      //}} 
      >
      <div className={styles.section_template__content}>
        { children }
      </div>
    </div>
  )
}
