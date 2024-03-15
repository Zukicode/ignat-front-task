import styles from './Footer.module.scss';

import { Container } from 'components/Container/Container';

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<Container>
				<ul>
					<li>НОВИНКИ</li>
					<li>ЧОЛОВІКИ</li>
					<li>ЖІНКИ</li>
					<li>АКСЕСУАРИ</li>
					<li>АКЦІЇ</li>
				</ul>

				<p>© 2022 — 2023 IGNAT. Усі права захищені.</p>
			</Container>
		</div>
	);
};
