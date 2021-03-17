import Head from "next/head";
import useUser, { USER_STATES } from "../../hooks/useUser";
import { logout } from "../../firebase";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import AsideHome from "../../components/AsideHome";
import Card from "../../components/Card";
import { useState } from "react";
import { updateName} from "../../firebase";
import Mensages from "../../components/Mensages";





export default function Home() {

	const user = useUser();

	const clickLogout = (e) => {
		e.preventDefault();
		logout();
	};

	const update = (e) =>{
		e.preventDefault();
		updateName(name)
	}

	const dale=(e)=>{
		e.preventDefault();
		alert(user.displayName);
	}

	const [name, setName] = useState();
	return (
		<>
			<Head>
				<title>Inicio / Voidi</title>
				<link rel="icon" href="/favicon.png" />
				<meta name="google" content="notranslate" />
			</Head>
			{user && (
				<div className={styles.page}>
					<Navbar></Navbar>
					<div className={styles.container}>
						<AsideHome name={user.displayName}></AsideHome>
						<main>
							<Card></Card>
							{/*Hola {user.displayName} esta página aún no está disponible*/}
						</main>
						<Mensages></Mensages>
					</div>
					{/*<button onClick={clickLogout}>Log out</button>
					
					<input type="text" value={name} onChange={e => setName(e.target.value)}/>
					<button onClick={update}>Enviar</button>
					<button onClick={dale}>dale</button>*/}
				</div>
			)}
			{user === USER_STATES.NOT_KNOWN && <p>Cargando</p>}
		</>
	);
}
