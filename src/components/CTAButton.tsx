import Link from 'next/link';

interface CTAButtonProps {
	href: string;
	text: string;
	isPrimary?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
	href,
	text,
	isPrimary = true,
}) => {
	const buttonClass = isPrimary ? 'btn-primary' : 'btn-secondary';

	return (
		<Link
			href={href}
			className={`btn ${buttonClass}`}>
			{text}
		</Link>
	);
};

export default CTAButton;
