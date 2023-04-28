import LogoHimakom from '@/svg/logo-himakom';
import Footer from '../../../styles/Footer.module.scss';
import Image from 'next/image';

export default function Header() {
	return (
		<>
			<div className={Footer.wrapper}>
				<div className={Footer.wrapper_leftcol}>
					<Image
						src="/main/images/logo/logo_white.svg"
						width="50"
						height="50"
						alt="logo white"
					/>
					<div className={Footer.wrapper_leftcol_content}>
						<h2>HIMAKOM UGM</h2>
						<p>
							Gedung Fakultas MIPA UGM Sekip Utara, <br />
							<br />
							Bulaksumur, Sinduadi, Mlati, Sleman, DI Yogyakarta{' '}
						</p>

						<p>© HIMAKOM UGM - All rights reserved. Copyright - 2023</p>
					</div>
				</div>

				<div className={Footer.wrapper_rightcol}>
					<div className={Footer.wrapper_rightcol_icons}>
						<a href="mailto:Himakom.mipa@ugm.ac.id"  target="_blank">
							<Image
								src="/main/images/logo/Vector-mail.svg"
								width="36"
								height="28"
								alt="Email Logo"
							/>
						</a>

						<a href="line://ti/p/@myk3387q"  target="_blank">
							<Image
								src="/main/images/logo/Vectorline.png"
								width="36"
								height="28"
								alt="Line Logo"
							/>
						</a>

						<a href="https://id.linkedin.com/company/himakomugm"  target="_blank">
							<Image
								src="/main/images/logo/linkedin.svg"
								width="36"
								height="28"
								alt="Linked Logo"
							/>
						</a>

						<a href="https://twitter.com/himakomugm?lang=en"  target="_blank">
							<Image
								src="/main/images/logo/Vectortwitter.svg"
								width="36"
								height="28"
								alt="Twitter Logo"
							/>
						</a>

						<a href="https://www.instagram.com/himakomugm/?hl=en"  target="_blank">
							<Image
								src="/main/images/logo/Vectorinstagram.png"
								width="36"
								height="28"
								alt="Instagram Logo"
							/>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
