import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Lato } from 'next/font/google';
import { AppWrapper } from '@/context/state';

export default function Layout(props: { children: React.ReactNode }) {
	return (
		<div className="font-Lato	">
			<AppWrapper>
				<Header />
				<div className="layout__content">{props.children}</div>
				<Footer />
			</AppWrapper>
		</div>
	);
}
