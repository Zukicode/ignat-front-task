import styles from './Reviews.module.scss';

import { Container } from 'components/Container/Container';

import { Review } from './Review/Review';

import plus from 'assets/product/plus.svg';

import arrowLeft from 'assets/product/arrow-left.svg';
import arrowRight from 'assets/product/arrow-right.svg';

export const Reviews = () => {
	return (
		<Container>
			<div className={styles.reviews}>
				<div className={styles.header}>
					<h1 className={styles.title}>
						Відгуки про товар <span>(11)</span>
					</h1>

					<div className={styles.controls}>
						<p>01 / 03</p>
						<div className={styles.buttons}>
							<button>
								<img src={arrowLeft} alt='arrow-left' />
							</button>
							<button>
								<img src={arrowRight} alt='arrow-right' />
							</button>
						</div>
					</div>
				</div>

				<div className={styles.items}>
					<div className={styles.newReview}>
						<img src={plus} alt='plus' />
					</div>

					<Review />
					<Review />
					<Review />
				</div>
			</div>
		</Container>
	);
};
