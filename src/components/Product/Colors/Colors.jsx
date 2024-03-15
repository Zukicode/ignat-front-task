import styles from './Colors.module.scss';

import check from 'assets/product/check.svg';

export const Colors = ({ currentColor, setCurrentColor, colors }) => {
	return (
		<div className={styles.colors}>
			<p>ОБЕРІТЬ КОЛІР</p>

			<div className={styles.chooseColor}>
				{colors.map((color) => (
					<div key={color} className={styles.color}>
						<div
							onClick={() => setCurrentColor(color)}
							className={
								currentColor === color
									? `${styles.round} ${styles.active}`
									: styles.round
							}
							style={{ background: color }}
						/>
						<span
							className={
								currentColor === color
									? `${styles.check} ${styles.show}`
									: styles.check
							}
						>
							<img src={check} alt='arrow' />
						</span>
					</div>
				))}
			</div>
		</div>
	);
};
