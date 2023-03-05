import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Lato } from 'next/font/google';

export default function Layout(props: { children: React.ReactNode }) {
	return (
		<div className='font-Lato	'>
			<div className="layout__content">{props.children}</div>
			<Footer/>
		</div>
	);
}
