import styles from './Recommend.module.scss';

export const Recommend = ({ photo }) => {
	return (
		<div className={styles.recommend}>
			<img src={photo} alt='gym' />
			<div className={styles.description}>
				<h1>Термобілизна для бодібілдерів</h1>

				<div className={styles.tags}>
					<span>Для чоловіків</span>
					<span>2 кольори</span>
				</div>

				<h3 className={styles.price}>4000 грн.</h3>
			</div>
		</div>
	);
};
