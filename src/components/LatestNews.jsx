import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
	return (
		<div className='flex gap-2 font-semibold items-center p-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white '>
			<p className='bg-[#d72050] text-base-100 px-3 py-1'>Latest</p>
			<Marquee pauseOnHover={true} className="space-x-10">
				<Link to='/news'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, iure?
			</Link>
			</Marquee>
			<Marquee pauseOnHover={true} className="space-x-10">
				<Link to='/news'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, iure?
			</Link>
			</Marquee>
			<Marquee pauseOnHover={true} className="space-x-10">
				<Link to='/news'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, iure?
			</Link>
			</Marquee>
		</div>
	);
};

export default LatestNews;