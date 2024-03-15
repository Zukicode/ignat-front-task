import styles from './Header.module.scss';

import { Container } from 'components/Container/Container';

import bag from 'assets/bag.svg';
import menu from 'assets/header/hamburger-menu.svg';
import search from 'assets/header/search.svg';
import heart from 'assets/heart.svg';
import logo from 'assets/logo.svg';

export const Header = () => {
	return (
		<div className={styles.header}>
			<Container>
				<div className={styles.logoAndMenu}>
					<button className={styles.mobileMenu}>
						<img src={menu} alt='menu' />
					</button>

					<img src={logo} alt='logo' />

					<ul>
						<li className={styles.active}>НОВИНКИ</li>
						<li>ЧОЛОВІКИ</li>
						<li>ЖІНКИ</li>
						<li>АКСЕСУАРИ</li>
						<li>АКЦІЇ</li>
					</ul>
				</div>

				<div className={styles.searchAndCart}>
					<div className={styles.search}>
						<img src={search} alt='search' />
						<input type='text' />
					</div>

					<div className={styles.cart}>
						<button>
							<img src={heart} alt='heart' />
						</button>
						<button>
							<img src={bag} alt='bag' />
						</button>
					</div>
				</div>
			</Container>
		</div>
	);
};
