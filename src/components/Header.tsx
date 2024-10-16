'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="bg-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					<div className="flex items-center">
						<Link
							href="/"
							className="flex-shrink-0">
							<svg
								width="270"
								height="50"
								xmlns="http://www.w3.org/2000/svg">
								<text
									x="10"
									y="40"
									font-family="Inter"
									font-size="24"
									fill="#4F46E5"
									font-weight="bold">
									This Awesome Studio
								</text>
								<line
									x1="10"
									y1="45"
									x2="260"
									y2="45"
									stroke="#FDCB6E"
									stroke-width="4"
									stroke-linecap="round"
								/>
							</svg>
						</Link>
					</div>
					<nav className="hidden md:flex space-x-8">
						<Link
							href="/about"
							className="text-gray-500 hover:text-gray-900">
							About
						</Link>
						<Link
							href="/services"
							className="text-gray-500 hover:text-gray-900">
							Services
						</Link>
						<Link
							href="/pricing"
							className="text-gray-500 hover:text-gray-900">
							Pricing
						</Link>
						<Link
							href="/results"
							className="text-gray-500 hover:text-gray-900">
							Results
						</Link>
						<Link
							href="/blog"
							className="text-gray-500 hover:text-gray-900">
							Blog
						</Link>
					</nav>
					<div className="hidden md:flex">
						<Link
							href="/contact"
							className="btn btn-primary text-white bg-indigo-600 hover:bg-indigo-700 rounded-md md:py-2 md:text-base md:px-3">
							Contact
						</Link>
					</div>
					<div className="md:hidden">
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
				</div>
			</div>

			{isMenuOpen && (
				<div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
					<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
						<div className="pt-5 pb-6 px-5">
							<div className="flex items-center justify-between">
								<svg
									width="270"
									height="60"
									xmlns="http://www.w3.org/2000/svg">
									<text
										x="10"
										y="40"
										font-family="Inter"
										font-size="24"
										fill="#4F46E5"
										font-weight="bold">
										This Awesome Studio
									</text>
									<line
										x1="10"
										y1="45"
										x2="260"
										y2="45"
										stroke="#FDCB6E"
										stroke-width="4"
										stroke-linecap="round"
									/>
								</svg>
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
