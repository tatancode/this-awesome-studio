'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Guarantee = () => {
	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center">
					<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
						Our Guarantee
					</h2>
					<p className="mt-4 text-lg text-gray-500">
						We&apos;re so confident in our services that we offer a 30-day
						money-back guarantee.
					</p>
				</motion.div>
				<div className="mt-16">
					<div className="lg:flex lg:items-center lg:justify-between">
						<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
							<Image
								src="/founder-signature.png"
								alt="Founder's signature"
								width={200}
								height={100}
								className="mx-auto lg:mx-0"
							/>
							<blockquote className="mt-6 text-gray-500 italic">
								&quot;We stand behind our work. If you&apos;re not completely
								satisfied with our services within the first 30 days, we&apos;ll
								refund your money. No questions asked.&quot;
							</blockquote>
							<p className="mt-4 font-medium text-gray-900">
								- John Doe, Founder
							</p>
						</div>
						<div className="mt-10 lg:mt-0">
							<Image
								src="/guarantee-badge.png"
								alt="30-day money-back guarantee"
								width={200}
								height={200}
								className="mx-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Guarantee;
