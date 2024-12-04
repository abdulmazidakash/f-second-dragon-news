import { Link } from "react-router-dom";
import userIcon from '../assets/user.png';


const Navbar = () => {

	

	return (
		<div className="flex justify-between items-center font-semibold">
			<div className=""></div>
			<div className="nav space-x-5">
				<Link to='/'>Home</Link>
				<Link to='/career'>Career</Link>
				<Link to='/about'>About</Link>
			</div>
			<div className="login flex gap-2 items-center">
				<div className="">
					<img src={userIcon} alt="" />
				</div>
				<Link to='/auth/login' className="btn bg-gradient-to-r from-gray-900 to-fuchsia-950 text-white">Login</Link>
			</div>
		</div>
	);
};

export default Navbar;