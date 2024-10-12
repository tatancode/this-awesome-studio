'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
	{ name: 'Shopify Partners', logo: '/shopify-partners-logo.png' },
	{ name: 'WooCommerce', logo: '/woocommerce-logo.png' },
	{ name: 'Google Search Console', logo: '/google-search-console-logo.png' },
];

const SocialProof = () => {
	return (
		<div className="bg-gray-100">
			<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<div className="lg:grid lg:grid-cols-2 lg:gap-8">
					<div>
						<h2 className="max-w-md mx-auto text-3xl font-extrabold text-gray-900 text-center lg:max-w-xl lg:text-left">
							Trusted by leading companies
						</h2>
					</div>
					<div className="flow-root self-center mt-8 lg:mt-0">
						<div className="flex flex-wrap justify-between space-y-4 sm:space-y-0 sm:-mx-4 lg:-mx-8 xl:-mx-10">
							{partners.map((partner, index) => (
								<motion.div
									key={partner.name}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="flex items-center justify-center w-full sm:w-1/2 lg:w-1/3 px-4 lg:px-8 xl:px-10">
									<Image
										src={partner.logo}
										alt={partner.name}
										width={150}
										height={50}
										className="h-12 object-contain"
									/>
								</motion.div>
							))}
						</div>
					</div>
				</div>
				<div className="mt-16 border-t border-gray-200 pt-8">
					<p className="text-base font-semibold text-gray-400 text-center">
						Best of Ontario Award Winner 2023
					</p>
				</div>
			</div>
		</div>
	);
};

export default SocialProof;
