import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {

	const {data: news} = useLoaderData();
	console.log(news);
	return (
		<div>
			<div className='font-semibold text-center mb-2 bg-gradient-to-r from-zinc-200 to-teal-200 rounded-lg mt-0 p-2'>
				<h2 className='font-semibold mb-2'>Dragon News home</h2>
				<p className='text-black'>{news.length} News found on this category</p>
			</div>
			<div>
				{
					news.map((singleNews) => (<NewsCard
					key={singleNews._id}
					news={singleNews}
					>
		
					</NewsCard>))
				}
			</div>
		</div>
	);
};

export default CategoryNews;