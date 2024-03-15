import styles from './Recommends.module.scss';

import { Container } from 'components/Container/Container';
import { Recommend } from './Recommend/Recommend';

import more from 'assets/product/more.svg';

export const Recommends = () => {
	return (
		<Container>
			<div className={styles.recommends}>
				<h1 className={styles.title}>Ще може сподобатись</h1>

				<div className={styles.items}>
					<Recommend />
					<Recommend />
					<Recommend />
				</div>

				<div className={styles.more}>
					<h3>ДИВИТИСЬ БІЛЬШЕ</h3>
					<img src={more} alt='more' />
				</div>
			</div>
		</Container>
	);
};
