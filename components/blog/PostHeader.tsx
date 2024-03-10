/**
 * Blog Post Header
 */

// Dependencies
import React from 'react';
import Image from 'next/image';
import ReadTime from './ReadTime';

type HeaderProps = React.ComponentProps<'header'> & {
	title: BlogPost['title'];
	description: BlogPost['description'];
	image?: BlogPost['image'];
	alt?: BlogPost['alt'];
	author: BlogPost['author'];
	publishedAt: BlogPost['publishedAt'];
	body?: BlogPost['body'];
};

const PostHeader: React.FC<HeaderProps> = ({
	image,
	alt,
	title,
	description,
	author,
	publishedAt,
	body,
}) => {
	return (
		<header className='flex flex-col gap-4 h-fit lg:sticky lg:top-36 text-center lg:text-left'>
			{image ? (
				<div className='rounded overflow-hidden'>
					<Image
						src={image}
						alt={alt || ''}
						width={100}
						height={100}
						className='w-full h-auto object-cover aspect-video'
						unoptimized
					/>
				</div>
			) : null}
			<h1 className='text-2xl lg:text-4xl leading-tight'>{title}</h1>
			<h2 className='text-base lg:text-lg text-slate-500'>
				{description}
			</h2>
			<section className='flex items-center gap-4 mt-4 text-left'>
				{author ? (
					<div className='flex items-center gap-2'>
						<div className='rounded-full overflow-hidden w-16 h-16'>
							<Image
								src={author.image}
								alt={author.alt || ''}
								width={100}
								height={100}
								className='w-full h-auto object-cover'
								unoptimized
							/>
						</div>
						<p className='flex flex-col'>
							<span className='text-lg font-medium'>
								{author.name}
							</span>
							<span>
								{new Intl.DateTimeFormat('en-US', {
									dateStyle: 'medium',
								}).format(new Date(publishedAt))}
							</span>
						</p>
					</div>
				) : null}
				<div>•</div>
				<ReadTime body={body} />
			</section>
		</header>
	);
};

export default PostHeader;
