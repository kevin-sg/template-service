import './main.css';
import './hero.css';
import './description.css';
import './gallery.css';
import './services.css';
import './footer.css';
import { CardGallery, CardServices } from '@/components/card';
import houseImage from '../../public/img/house.jpg';

import { LIST_SERVICES, LIST_GALLERY } from '@/data';
import { Hero } from '@/components/layout';

export default function Home() {
	return (
		<main className='bg-white'>
			{/* Hero */}
			<Hero />

			{/* Testimonial */}
			<section className='container'>
				<article className='box-testimonial'>
					<div className='person'>
						<h3 className='font-600 text-lg font-montserrat'>Sarah Thompson</h3>
						<span className='font-500 text-md text-left font-plus-jakarta-sans'>Entrepreneur</span>
					</div>

					<div className='testimonial'>
						<svg width='57px' height='51px' viewBox='0 0 57 51' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								opacity='0.8'
								d='M37.8799 40.4463C42.7428 40.4463 46.6875 36.3898 46.6875 31.385C46.6875 26.3831 42.7428 22.3237 37.8799 22.3237C29.0753 22.3237 34.944 4.80815 46.6875 4.80815L46.6875 0.579536C25.7287 0.576514 17.5161 40.4463 37.8799 40.4463ZM12.5082 40.4463C17.3681 40.4463 21.3128 36.3898 21.3128 31.385C21.3128 26.3831 17.3681 22.3237 12.5082 22.3237C3.70063 22.3237 9.56934 4.80815 21.3128 4.80815L21.3128 0.579534C0.35701 0.576512 -7.85556 40.4463 12.5082 40.4463Z'
								fill='#0A0A0A'
							/>
						</svg>

						<p className='font-500 text-md text-left font-plus-jakarta-sans'>
							Home Maintenance Services from G1 Real Estate are fantastic! They always deliver top-notch service,
							keeping our properties in great shape. Highly recommend!
						</p>
					</div>
				</article>
			</section>

			{/* Galley */}
			<section className='container section-gallery'>
				<div className='gallery-description'>
					<h2 className='font-600 text-xl text-center font-montserrat'>Trusted and Reliable</h2>
					<p className='font-500 text-md text-center font-plus-jakarta-sans'>
						As part of the haus & haus Group, Breathe Home Maintenance offers a wide range of <br /> services handled by
						expert technicians {'-'} including AC maintenance, water tank cleaning, <br /> electrical services,
						painting, and diverse handyman jobs.
					</p>
				</div>

				<div className='box-gallery-card'>
					{LIST_GALLERY.map((gallery, idx) => (
						<CardGallery
							key={gallery.id}
							title={gallery.title}
							paragraph={gallery.description}
							img={houseImage}
							isReverse={idx % 2 === 0 ? false : true}
						/>
					))}
				</div>
			</section>

			{/* Service */}
			<section className='bg-blue w-full'>
				<div className='container box-services'>
					<div className='services-description'>
						<h3 className='text-white font-500 text-md text-center font-montserrat'>OUR SERVICES</h3>
						<h2 className='font-600 text-white text-xl text-center font-montserrat'>Our Diverse Range of Services</h2>
						<p className='text-white text-base text-center font-plus-jakarta-sans font-400'>
							Discover our wide range of real estate services <br /> tailored to meet your needs, from listings to{' '}
							<br />
							investment guidance.
						</p>
					</div>

					<div className='list-service'>
						{LIST_SERVICES.map((services) => (
							<CardServices key={services.id} {...services} />
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='bg-white footer'>
				<h2 className='text-xl text-center'>Footer</h2>
			</footer>
		</main>
	);
}
