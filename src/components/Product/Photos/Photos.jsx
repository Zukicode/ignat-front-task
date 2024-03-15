import { useState } from 'react';

import styles from './Photos.module.scss';

export const Photos = ({ photos }) => {
	const [currentPhoto, setCurrentPhoto] = useState(1);

	return (
		<div className={styles.photos}>
			<img
				src={photos[currentPhoto]}
				alt='product'
				className={styles.current}
			/>

			<div className={styles.anotherPhoto}>
				{photos.map((photo, i) => (
					<img
						key={i}
						src={photo}
						alt='product'
						className={i === currentPhoto ? styles.active : ''}
						onClick={() => setCurrentPhoto(i)}
					/>
				))}
			</div>
		</div>
	);
};
