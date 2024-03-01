import Image from 'next/image';
import Link from 'next/link';

type CardServicesProps = {
	title: string;
	description: string;
	icon: any;
};

export const CardServices = ({ title, description, icon }: CardServicesProps) => {
	return (
		<div className='card-service'>
			<div className='card-service-title'>
				<Image src={icon} width={58} height={40} alt='Hand Icon' />
				<h4 className='text-black font-500 text-md text-left font-montserrat heading_4'>{title}</h4>
			</div>

			<p className='font-plus-jakarta-sans text-black text-base font-400'>{description}</p>

			<Link href={'/'} className='text-black text-md font-500 font-plus-jakarta-sans link'>
				Learn more{' '}
				<svg width='44' height='21' viewBox='0 0 44 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						opacity='0.9'
						d='M42.2324 10.6433L1.09376 10.6433M42.2324 10.6433L32.8762 1.28711M42.2324 10.6433L32.8762 19.9996'
						stroke='#222222'
						strokeWidth='1.55937'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</Link>
		</div>
	);
};
