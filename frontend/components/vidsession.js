import Video from './video';
import styles from '../styles/Video.module.scss';

export default function VideoSession() {
  return (
    <div className={styles.main}>
        <div className={styles.slogan}>
            <h1 className="font_dog">My best dog it's mine</h1>
            <h3 className="font_normal font_16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus mi ut risus venenatis,
            nec bibendum dui posuere. Nulla et fringilla odio, vitae aliquam eros. Ut pretium in ligula quis 
            efficitur. Curabitur rutrum diam et erat vestibulum, ut porta odio pretium. 
            </h3>
        </div>
      <Video/>
    </div>
  );
}
