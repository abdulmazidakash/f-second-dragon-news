import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
	return (
		<div className='flex flex-col justify-center items-center gap-2 py-2'>
			<div className='logo'>
				<img className='w-[300px]' src={logo} alt="" />
			</div>
			<h2 className='text-gray-400 font-semibold'>Journalism without fear or favour</h2>
			<p className='text-gray-500 font-semibold'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
		</div>
	);
};

export default Header;