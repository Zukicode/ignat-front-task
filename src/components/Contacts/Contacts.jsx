import styles from './Contacts.module.scss';

import { Container } from 'components/Container/Container';

export const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<Container>
				<div className={styles.contact}>
					<h3>Контакти - центр</h3>

					<div className={styles.items}>
						<p className={styles.item}>098 900 09 09</p>
						<p className={styles.item}>Пн - Пт 09:00 - 21:00</p>
						<p className={styles.item}>Пн - Пт 09:00 - 21:00</p>
					</div>
				</div>

				<div className={styles.contact}>
					<h3>Покупцям</h3>

					<div className={styles.items}>
						<a className={styles.item}>Оплата і доставка</a>
						<a className={styles.item}>Повернення</a>
						<a className={styles.item}>Питання та відповіді</a>
					</div>
				</div>

				<div className={styles.contact}>
					<h3>Особистий кабінет</h3>

					<div className={styles.items}>
						<a className={styles.item}>Мої дані</a>
						<a className={styles.item}>Історія замовлень</a>
						<a className={styles.item}>Улюблені</a>
						<a className={styles.item}>Розсилки</a>
					</div>
				</div>

				<div className={styles.contact}>
					<h3>Про компанію</h3>

					<div className={styles.items}>
						<a className={styles.item}>Про нас</a>
						<a className={styles.item}>Новини</a>
						<a className={styles.item}>Стати партнером</a>
						<a className={styles.item}>Угода користувача</a>
					</div>
				</div>
			</Container>
		</div>
	);
};
