import { Logo } from '..';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="md:h-[293px] bg-slideworks-700 h-80">
			<div className="h-full flex md:items-center">
				<div className="flex flex-col md:justify-between md:items-start md:px-28 px-1 w-full md:h-1/2 justify-around ">
					<div>
						<Logo fill />
					</div>
					<div className="bg-white h-[2px] w-full" />
					<div className="flex flex-col md:flex-row md:justify-between w-full ">
						<section className="flex md:items-center md:justify-between justify-center ">
							<div className="flex gap-8 text-white">
								<a
									href="#"
									className="md:font-normal">
									Terms &amp; Conditions
								</a>
								<a
									href="#"
									className="md:font-normal">
									Privacy Policy
								</a>
							</div>
						</section>
						<br />
						<div className="flex md:justify-start justify-center md:gap-6 gap-10">
							<a
								href="https://pt-br.facebook.com"
								target="_blank"
								rel="noreferrer">
								<FaFacebookF className="md:w-9 md:h-9 h-7 w-7 text-white" />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noreferrer">
								<FaTwitter className="md:w-9 md:h-9 h-7 w-7 text-white" />
							</a>
							<a
								href="https://www.instagram.com"
								target="_blank"
								rel="noreferrer">
								<FaInstagram className="md:w-9 md:h-9 h-7 w-7 text-white" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
