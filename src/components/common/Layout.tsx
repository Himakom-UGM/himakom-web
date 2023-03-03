import Header from './Header/Header';
import { Lato } from 'next/font/google';

export default function Layout(props: { children: React.ReactNode }) {
	return (
		<div className='font-Lato'>
			<Header />
			<div className="layout__content">{props.children}</div>
		</div>
	);
}
