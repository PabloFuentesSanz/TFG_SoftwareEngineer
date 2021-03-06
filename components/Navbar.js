import styles from "../styles/Navbar.module.css";
import Info from "../components/infoProfile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

import Link from 'next/link'


export default function Navbar(props) {
    const [isUp, setIsUp] = useState(false);
    const handleInfoClick = (e) => {
        if (isUp) {
            document.getElementById("info").style.top = "-500px";

            setIsUp(false);
        } else {
            document.getElementById("info").style.top = "70px";
            ;
            setIsUp(true);
        }
    }

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.logoIzq}>
                    <Link href="/">

                        <img src="../logo.png" alt="logo" />
                    </Link>
                </div>
                <div id="perfil" onClick={handleInfoClick} className={styles.perfil}>
                    <img className={styles.logoPerfil} src={props.img} alt="logo" />
                    <FontAwesomeIcon className={styles.icon} icon={faSortDown} />
                </div>

            </nav>
            <Info name={props.name}></Info>
        </>
    );
}
