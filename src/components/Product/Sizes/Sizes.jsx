import styles from './Sizes.module.scss';

export const Sizes = ({ sizes, currentSize, setCurrentSize }) => {
	return (
		<div className={styles.sizes}>
			<p>ОБЕРІТЬ РОЗМІР</p>

			<div className={styles.chooseSize}>
				{sizes.map((size) => (
					<button
						key={size}
						onClick={() => setCurrentSize(size)}
						className={
							size === currentSize
								? `${styles.size} ${styles.active}`
								: styles.size
						}
					>
						{size}
					</button>
				))}
			</div>
		</div>
	);
};
