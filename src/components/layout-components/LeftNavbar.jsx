import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {

	const [categories, setCategories] = useState([]);

	useEffect(()=>{
		fetch('https://openapi.programming-hero.com/api/news/categories')
			.then(res => res.json())
			.then(data =>{
				// console.log(data.data.news_category);
				setCategories(data.data.news_category);
			})
	}, [])
	return (
		<div className='font-semibold'>
			<button className='btn w-full mb-3 bg-gradient-to-l from-slate-900 to-orange-950 text-white'>All Category: {categories.length} </button>
			<div className='flex flex-col gap-2'>
				{
					categories.map(category => <NavLink to={`category/${category.category_id}`} key={category.category_id} className='btn bg-gradient-to-t from-slate-950 to-sky-950 text-white'>{category.category_name}</NavLink>)
				}
			</div>
		</div>
	);
};

export default LeftNavbar;