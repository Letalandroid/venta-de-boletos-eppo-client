import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import styles from './Home.module.scss';
import logo_bb from '../../assets/logo_buscobus.png';
import precios from '../../assets/precio.jpg';

const Home = () => {
	return (
		<>
			<Nav />
			<div className={styles.container__card}>
				<div>
					<img src={logo_bb} alt="logo buscobus" />
					<div className={styles.line}></div>
					<div className={styles.card__text}>
						<p>
							EPPO es una empresa que tiene más de 30 años de experiencia en el
							transporte terrestre de pasajeros interprovincial en el Norte de
							Perú. Ofrece servicios de encomiendas. Sus rutas se localizan
							exclusivamente en las principales ciudades del departamento de
							Piura.
						</p>
						<a
							href="https://buscobus.pe/transportes/eppo/#rutas+eppo%3a+horarios+2023+y+precios+de+pasajes"
							target="_blank">
							Ver más
						</a>
					</div>
				</div>
			</div>
			<div className={styles.container__precios}>
				<div>
					<img src={precios} alt="precios EPPO" />
					<a href="/comprar-boleto">COMPRAR BOLETO</a>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
