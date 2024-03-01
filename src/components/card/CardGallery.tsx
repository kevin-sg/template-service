import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

type CardGalleryProps = {
	title: string;
	img: string | StaticImport;
	paragraph: string;
	isReverse?: boolean;
};

export const CardGallery = ({ title, paragraph, img, isReverse = false }: CardGalleryProps) => {
	return (
		<div className={'gallery-card '.concat(isReverse ? 'row-reverse' : '')}>
			<div className='gallery-details'>
				<div className='texts'>
					<h2 className='font-600 text-xl text-left font-montserrat'>{title}</h2>
					<p className='font-400 text-base text-left font-plus-jakarta-sans'>{paragraph}</p>
				</div>

				<button type='button' className='btn bg-blue text-white'>
					Contact Us
				</button>
			</div>
			<Image src={img} width={650} height={550} alt={title} />
		</div>
	);
};
