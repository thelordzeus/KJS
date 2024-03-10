/**
 * Home Page - Hero Component
 */

// Dependencies
import Image from 'next/image';
import HeroCTA from './HeroCTA';

const Hero = () => {
	return (
		<section className='min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-center gap-8 justify-center p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-12 lg:py-16'>
			<div className='flex flex-col gap-4 lg:gap-8 lg:w-1/2'>
				<div className='relative'>
					<h1 className='text-4xl md:text-5xl lg:text-6xl leading-tight'>
						Peace within{' '}
						<span className='text-app-primary'>humanity</span>,
						peace within{' '}
						<span className='text-app-primary'>nature</span>, peace
						within <span className='text-app-primary'>you</span>.
					</h1>
					<Image
						src={'/doodles/sun.svg'}
						unoptimized
						width={100}
						height={100}
						className='w-20 md:w-24 lg:w-32 object-contain absolute -top-4 right-0 md:-right-6 lg:-top-20 h-auto'
						alt={''}
					/>
				</div>
				<div>
					<p className='text-base lg:text-xl'>
						How can you get involved?
					</p>
					<p className='text-base lg:text-lg text-slate-500'>
						Making a small difference in someone&apos;s life adds
						meaning to every endeavor. Samaritans like you make us
						successful in our purpose, “Creating a Thriving
						Tomorrow, One Rural Youth at a Time”
					</p>
					<HeroCTA />
				</div>
			</div>
			<div className='lg:w-1/2 h-full flex items-center justify-end'>
				<div className='lg:w-3/4'>
					<Image
						src={'/images/hero.jpg'}
						unoptimized
						width={100}
						height={400}
						className='w-full rounded-lg object-contain h-auto'
						alt={'hero image'}
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
