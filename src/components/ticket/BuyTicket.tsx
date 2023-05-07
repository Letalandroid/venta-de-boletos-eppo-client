import { useState } from 'react';
import Nav from '../Nav/Nav';
import DataList from '../DataList/DataList';
import Footer from '../Footer/Footer';
import styles from './BuyTicket.module.scss';

const BuyTicket = () => {
	const [dni, setDni] = useState('');

	const options = [
		'Piura',
		'Sullana',
		'Talara',
		'El alto',
		'Los órganos',
		'Máncora',
	];

	const onChangeDni = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;

		if (/^\d*$/.test(inputValue)) {
			setDni(inputValue);
		}
	};

	document.title = 'EPPO S.A | Comprar Boleto';

	return (
		<>
			<Nav />
			<div className={styles.ticket__container}>
				<div>
					<h1>COMPRAR BOLETO</h1>
					<form action={import.meta.env.VITE_APP_BACKEND} method="POST">
						<input
							name="name"
							type="text"
							placeholder="Nombre completo (*)"
							required
						/>
						<input
							name="dni"
							type="text"
							placeholder="DNI (*)"
							onChange={onChangeDni}
							value={dni}
							maxLength={8}
							required
						/>
						<DataList options={options} ruta="la salida" />
						<DataList options={options} ruta="el destino" />
						<input
							name="email"
							type="text"
							placeholder="Correo electrónico (*)"
							onChange={onChangeDni}
							required
						/>
						<input
							className={styles.submit}
							type="submit"
							value="COMPRAR BOLETO"
						/>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default BuyTicket;
