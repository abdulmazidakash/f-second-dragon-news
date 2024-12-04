import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
	return (
		<div>
			<h2 className='font-semibold mb-3'>Login With</h2>
			<div className='space-y-2'>
				<button className='btn w-full bg-gradient-to-t from-zinc-950 to-green-950 text-white'><FaGoogle/> Login With Google</button>
				<button className='btn w-full bg-gradient-to-t from-zinc-950 to-green-950 text-white'><FaGithub/> Login With Github</button>
			</div>
		</div>
	);
};

export default SocialLogin;