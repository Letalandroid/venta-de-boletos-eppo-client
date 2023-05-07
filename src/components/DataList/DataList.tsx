import { useState } from 'react';
import styles from './DataList.module.scss';

type DataListProps = {
	options: Array<string>;
	ruta: string;
};

const DataList = ({ options, ruta }: DataListProps) => {
	const [valor, setValor] = useState('');
	const [mostrarValores, setMostrarValores] = useState(false);

	const changeValue = (evt: React.MouseEvent<HTMLDivElement>) => {
		const target = evt.target as HTMLDivElement;
		setValor(target.innerHTML);
		setMostrarValores(false);
	};

	return (
		<>
			<span accessKey="span" className={styles.span}>
				{ruta.replace('la ', '').replace('el ', '').toUpperCase()}:
			</span>
			<div className={styles.container}>
				<input
					name={ruta.replace('la ', '').replace('el ', '')}
					className={styles.input}
					type="text"
					placeholder={`-- Seleccione ${ruta} --`}
					value={valor}
					onClick={() => {
						mostrarValores ? setMostrarValores(false) : setMostrarValores(true);
					}}
					onChange={() => ''}
					required
				/>
				<div className={mostrarValores ? styles.mostrar : styles.ocultar}>
					{options.map((v) => {
						return (
							<div key={v} onClick={changeValue}>
								{v}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default DataList;
