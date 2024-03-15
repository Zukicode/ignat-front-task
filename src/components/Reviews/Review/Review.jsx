import styles from './Review.module.scss';

import outlineStar from 'assets/product/outline-star.svg';
import star from 'assets/product/star.svg';
import user from 'assets/product/user.png';

export const Review = () => {
	return (
		<div className={styles.review}>
			<div className={styles.title}>
				<img src={user} alt='' />

				<div className={styles.name}>
					<div className={styles.rating}>
						<img src={star} alt='star' />
						<img src={star} alt='star' />
						<img src={star} alt='star' />
						<img src={star} alt='star' />
						<img src={outlineStar} alt='outline-star' />
					</div>

					<h3>Жора Ремінгтон</h3>
				</div>
			</div>

			<p>
				Дуже задоволений якістю обслуговування і самою продукцією. Купували
				термобілизну у подарунок, друзі...
			</p>
		</div>
	);
};
