import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-components/LeftNavbar';
import RightNavbar from '../components/layout-components/RightNavbar';
import CategoryNews from '../pages/CategoryNews';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
	return (
		<div>
			<header>
				<Header></Header>
			</header>
			<section className='w-11/12 mx-auto'>
				<LatestNews></LatestNews>
			</section>
			<nav className='w-11/12 mx-auto py-2'>
				<Navbar></Navbar>
			</nav>
			<main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12'>
				<aside className='left col-span-3'>
						<LeftNavbar></LeftNavbar>
				</aside>
				<section className='col-span-6 p-2'>
						<Outlet></Outlet>
				</section>
				<aside className='col-span-3'>
						<RightNavbar></RightNavbar>
				</aside>
			</main>
			<footer></footer>
		</div>
	);
};

export default HomeLayout;