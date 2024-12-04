import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


const FindUs = () => {
	return (
		<div>
			<h2 className="font-semibold my-3">Find Us</h2>
			<div className="join join-vertical   *:w-full flex ">
				<button className="btn join-item justify-start bg-gradient-to-t from-teal-950 to-gray-950 text-white"><FaFacebook/> Facebook</button>
				<button className="btn join-item justify-start bg-gradient-to-t from-teal-950 to-gray-950 text-white"><FaInstagram/> Instagram</button>
				<button className="btn join-item justify-start bg-gradient-to-t from-teal-950 to-gray-950 text-white"><FaYoutube/> Youtube</button>
			</div>
		</div>
	);
};

export default FindUs;