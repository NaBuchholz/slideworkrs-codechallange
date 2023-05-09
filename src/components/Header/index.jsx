import { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
const Header = () => {
	const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
	const [isLogedIn, setIsLogedIn] = useState(false);
	const navLinks = [
		{ title: 'Home', link: '#' },
		{ title: 'Contato', link: '#' },
		{ title: 'Log In', link: '#' },
	];

	const handleMenu = () => {
		setHamburgerMenuOpen((previous) => !previous);
	};

	const handleLogIn = () => {
		setIsLogedIn((previous) => !previous);
	};

	return (
		<div className="flex grow flex-row flex-nowarp md:mt-9 my-2 items-center justify-between md:h-[104px]">
			<Logo className="flex-none w-18 mx-1 md:ml-28" />
			<nav className="flex justify-between text-sm flex-grow-1 items-center">
				<div className="hidden md:flex">
					<menu className="justify-between px-2 items-center ">
						<ul className="flex gap-2 space-x-2 mr-2 items-center ">
							<li className="text-white font-bold  h-8 flex justify-center items-center bg-slideworks-700 rounded-md transition-all duration-500  p-4">
								<button onClick={handleLogIn}>{isLogedIn ? 'Log Off' : 'Log In'}</button>
							</li>
							{navLinks
								.map((link, index) => (
									<li
										key={index}
										className="text-white font-bold  h-8 flex justify-center items-center bg-slideworks-700 rounded-md transition-all duration-500  p-4">
										<Link
											key={index}
											to={link.link}>
											{link.title}
										</Link>
									</li>
								))
								.slice(0, 2)}
							<li>
								{isLogedIn ? (
									<div className="flex items-center justify-center w-12 h-12 mx-2 overflow-hidden rounded-full">
										<img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" />
									</div>
								) : null}
							</li>
						</ul>
					</menu>
				</div>
				<div className="flex md:hidden">
					<button
						type="button"
						onClick={handleMenu}
						className="items-center p-2 rounded-md text-slideworks-700 hover:text-slideworks-900 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slideworks-700 ">
						<span className="sr-only">Abrir Menu Principal</span>
						{hamburgerMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
					</button>
				</div>
				{hamburgerMenuOpen ? (
					<div className="md:hidden">
						<div
							className={`absolute bg-white  z-[-1] left-0 w-full transition-all duration-500 ease-in ${
								hamburgerMenuOpen ? 'top-10 ' : null
							}`}>
							<div className=" text-xl  my-7 bg-white flex flex-col text-center gap-1">
								{navLinks
									.map((link, index) => (
										<Link
											key={index}
											to={link.link}
											className="text-slideworks-700 hover:text-slideworks-900 duration-500 py-2">
											{link.title}
										</Link>
									))
									.reverse()}
							</div>
						</div>
					</div>
				) : null}
			</nav>
		</div>
	);
};

export default Header;
