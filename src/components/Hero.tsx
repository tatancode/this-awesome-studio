'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<div className="bg-gray-50">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center">
					<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
						<span className="block">Web Design, SEO, and Branding</span>
						<span className="block text-indigo-600">for Your Business</span>
					</h1>
					<p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
						Our methods are guaranteed to generate more traffic and leads.
						Benefit from our Dedicated Account Managers, Money-Back Guarantee,
						and Award-Winning Team.
					</p>
					<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
						<div className="rounded-md shadow">
							<Link
								href="/contact"
								className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
								Contact
							</Link>
						</div>
						<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
							<Link
								href="/pricing"
								className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
								Pricing
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
