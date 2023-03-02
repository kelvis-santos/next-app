import style from '../menu.module.css';

export default function Menu() {
    return <div className={style.sidenav}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/techs">Tecnologias</a>
    </div>
}