import { useState } from 'react';

import styles from './Product.module.scss';

import { Container } from 'components/Container/Container';
import { Colors } from './Colors/Colors';
import { Description } from './Description/Description';
import { Photos } from './Photos/Photos';
import { Sizes } from './Sizes/Sizes';

import { colors, photos, sizes } from 'utils/data';

import bag from 'assets/bag.svg';
import heart from 'assets/heart.svg';

export const Product = () => {
	const [currentSize, setCurrentSize] = useState(sizes[4]);
	const [currentColor, setCurrentColor] = useState(colors[0]);

	return (
		<Container>
			<div className={styles.product}>
				<Photos photos={photos} />

				<div className={styles.content}>
					<div className={styles.title}>
						<h1>ЧОЛОВІЧИЙ ТЕРМОКОСТЮМ ATLANTIC</h1>
						<p>ТЕРМОКОСТЮМ</p>
					</div>

					<h3 className={styles.price}>3700 грн.</h3>

					<Sizes
						currentSize={currentSize}
						setCurrentSize={setCurrentSize}
						sizes={sizes}
					/>

					<Colors
						currentColor={currentColor}
						setCurrentColor={setCurrentColor}
						colors={colors}
					/>

					<Description />

					<div className={styles.buy}>
						<button className={styles.buyButton}>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
						<button className={styles.buyButton}>КУПИТИ У КРЕДИТ</button>

						<div className={styles.cart}>
							<button className={styles.cartButton}>
								<img src={heart} alt='heart' />
							</button>

							<button className={styles.cartButton}>
								<img src={bag} alt='bag' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
