import styles from './Recommends.module.scss';

import { Container } from 'components/Container/Container';
import { Recommend } from './Recommend/Recommend';

import more from 'assets/product/more.svg';

import photo1 from 'assets/product/current.png';
import photo2 from 'assets/product/first.png';
import photo3 from 'assets/product/second.png';

export const Recommends = () => {
	return (
		<Container>
			<div className={styles.recommends}>
				<h1 className={styles.title}>Ще може сподобатись</h1>

				<div className={styles.items}>
					<Recommend photo={photo2} />
					<Recommend photo={photo1} />
					<Recommend photo={photo3} />
				</div>

				<div className={styles.more}>
					<h3>ДИВИТИСЬ БІЛЬШЕ</h3>
					<img src={more} alt='more' />
				</div>
			</div>
		</Container>
	);
};
