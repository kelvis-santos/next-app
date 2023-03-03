import profilePic from '../public/img/kelvis.jpg';
import Image from 'next/image';
import style from '../home.module.css';

export default function Home() {
    return <div className={style.card_home}>
        <div className={style.title_box}>
            <Image className={style.image_profile} src={profilePic} alt="Kelvis Santos" />
            <h1 className={style.title}>Kelvis Santos</h1>
        </div>
        <p>
            Full Stack Developer, always looking to improve my skills and learn new things and create solutions. Experience with the stages of the systems development cycle and maintenance and improvement of already established systems, performance analysis, SEO, teaching and monitoring of new devs. Knowledge in several stacks such as PHP, Javascript, Nodejs, Vuejs, Nuxtjs, Twig, Symfony, Laravel. Basic Testing with Jest and development with ReactJs and React Native.</p>
    </div>
}