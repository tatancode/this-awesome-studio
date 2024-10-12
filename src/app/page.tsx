import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SocialProof from '@/components/SocialProof';
import Guarantee from '@/components/Guarantee';
import CTAButton from '@/components/CTAButton';

export default function Home() {
	return (
		<main>
			<Hero />
			<Services />
			<SocialProof />
			<Guarantee />
			<div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-center space-x-4 md:hidden">
				<CTAButton
					href="/pricing"
					text="Pricing"
					isPrimary={false}
				/>
				<CTAButton
					href="/contact"
					text="Contact"
				/>
			</div>
		</main>
	);
}
