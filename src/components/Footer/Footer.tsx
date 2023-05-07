import logo from '../../assets/eppo_logo.png';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
			<footer className={styles.footer}>
				<img src={logo} alt="logo eppo" />
				<span>
					Queda decir que este es un proyecto propio, NO OFICIAL de EPPO S.A @Letalandroid
				</span>
                <a href="/comprar-boleto">COMPRAR BOLETO</a>
			</footer>
		);
}

export default Footer;