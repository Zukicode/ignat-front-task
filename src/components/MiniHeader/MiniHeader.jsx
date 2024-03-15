import styles from './MiniHeader.module.scss';

import { Container } from 'components/Container/Container';

export const MiniHeader = () => {
	return (
		<div className={styles.header}>
			<Container>
				<div className={styles.contact}>
					<p>098 900 09 09</p>
					<a>Допомога</a>
				</div>

				<div className={styles.auth}>
					<a>Увійти</a>
					<span>/</span>
					<a>Зареєструватися</a>
				</div>
			</Container>
		</div>
	);
};
