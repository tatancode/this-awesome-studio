'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
	{
		title: 'Web Design & Development',
		description:
			'We design websites that inspire trust and captivate users, ensuring a seamless user experience across all devices.',
		link: '/services/web-design',
	},
	{
		title: 'Search Engine Optimization',
		description:
			'Boost engagement and increase sales through organic traffic with our proven SEO strategies.',
		link: '/services/seo',
	},
	{
		title: 'Logo Design & Branding',
		description:
			"Align your brand's message and style with our expert logo design and branding services.",
		link: '/services/branding',
	},
];

const Services = () => {
	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
						Our Services
					</h2>
					<p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
						We offer a range of services to help your business grow and succeed
						online.
					</p>
				</div>
				<div className="mt-20">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{services.map((service, index) => (
							<motion.div
								key={service.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="pt-6">
								<div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
									<div className="-mt-6">
										<h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
											{service.title}
										</h3>
										<p className="mt-5 text-base text-gray-500">
											{service.description}
										</p>
										<div className="mt-6">
											<Link
												href={service.link}
												className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
												Learn More
											</Link>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
