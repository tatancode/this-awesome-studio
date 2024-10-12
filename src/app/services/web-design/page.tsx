import CTAButton from '@/components/CTAButton';

export default function WebDesign() {
	return (
		<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
			<h1 className="text-4xl font-extrabold text-gray-900">
				Web Design & Development
			</h1>
			<p className="mt-4 text-lg text-gray-500">
				We design websites that inspire trust and captivate users, ensuring a
				seamless user experience across all devices.
			</p>
			<div className="mt-8">
				<CTAButton
					href="/contact"
					text="Get Started"
				/>
			</div>
		</div>
	);
}
