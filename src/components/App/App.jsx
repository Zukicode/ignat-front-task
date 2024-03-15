//Components
import { Contacts } from 'components/Contacts/Contacts';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { MiniHeader } from 'components/MiniHeader/MiniHeader';
import { Path } from 'components/Path/Path';
import { Product } from 'components/Product/Product';
import { Recommends } from 'components/Recommends/Recommends';
import { Reviews } from 'components/Reviews/Reviews';

export const App = () => {
	return (
		<>
			<MiniHeader />
			<Header />
			<Path />
			<Product />
			<Reviews />
			<Recommends />
			<Contacts />
			<Footer />
		</>
	);
};
