import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="bg-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<Link href="/">
							<span className="sr-only">Your Company</span>
							<img
								className="h-8 w-auto sm:h-10"
								src="/logo.png"
								alt="Your Company"
							/>
						</Link>
					</div>
					<div className="-mr-2 -my-2 md:hidden">
						<button
							type="button"
							className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<span className="sr-only">Open menu</span>
							<Bars3Icon
								className="h-6 w-6"
								aria-hidden="true"
							/>
						</button>
					</div>
					<nav className="hidden md:flex space-x-10">
						<Link
							href="/services/web-design"
							className="text-base font-medium text-gray-500 hover:text-gray-900">
							Web Design
						</Link>
						<Link
							href="/services/seo"
							className="text-base font-medium text-gray-500 hover:text-gray-900">
							SEO
						</Link>
						<Link
							href="/services/branding"
							className="text-base font-medium text-gray-500 hover:text-gray-900">
							Branding
						</Link>
					</nav>
					<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						<Link
							href="/pricing"
							className="btn btn-secondary mr-4">
							Pricing
						</Link>
						<Link
							href="/contact"
							className="btn btn-primary">
							Contact
						</Link>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
					<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
						<div className="pt-5 pb-6 px-5">
							<div className="flex items-center justify-between">
								<div>
									<img
										className="h-8 w-auto"
										src="/logo.png"
										alt="Your Company"
									/>
								</div>
								<div className="-mr-2">
									<button
										type="button"
										className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
										onClick={() => setIsMenuOpen(false)}>
										<span className="sr-only">Close menu</span>
										<XMarkIcon
											className="h-6 w-6"
											aria-hidden="true"
										/>
									</button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid gap-y-8">
									<Link
										href="/services/web-design"
										className="text-base font-medium text-gray-900 hover:text-gray-700">
										Web Design
									</Link>
									<Link
										href="/services/seo"
										className="text-base font-medium text-gray-900 hover:text-gray-700">
										SEO
									</Link>
									<Link
										href="/services/branding"
										className="text-base font-medium text-gray-900 hover:text-gray-700">
										Branding
									</Link>
								</nav>
							</div>
						</div>
						<div className="py-6 px-5 space-y-6">
							<div>
								<Link
									href="/pricing"
									className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink-600 hover:bg-pink-700">
									Pricing
								</Link>
								<p className="mt-6 text-center text-base font-medium text-gray-500">
									Need help?{' '}
									<Link
										href="/contact"
										className="text-indigo-600 hover:text-indigo-500">
										Contact Us
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
