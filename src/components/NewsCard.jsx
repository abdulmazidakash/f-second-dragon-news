import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = (props = {}) => {

	const { news } = props || {};
    return (
        <div className=" bg-gradient-to-t from-teal-300 to-rose-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-2">
            <div className="flex items-center p-4">
                <img
                    className="w-12 h-12 rounded-full"
                    src={news.author.img}
                    alt={news.author.name}
                />
                <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{news.author.name}</h4>
                    <p className="text-gray-500 text-sm">{new Date(news.published_date).toLocaleDateString()}</p>
                </div>
                <FaShareAlt className="ml-auto text-gray-500 hover:text-gray-700 cursor-pointer" />
            </div>
            <div className="p-4">
                <h2 className="font-bold text-lg mb-2">{news.title}</h2>
                <img
                    className="w-full h-68 object-cover rounded-md mb-4"
                    src={news.image_url}
                    alt={news.title}
                />

				{/* news details  */}
                <p className="text-gray-700 text-sm mb-4">
					{news.details.slice(0, 150)}...{''}
					<Link to={`/news/${news._id}`} className='text-primary'>Read More</Link>
				</p>

            </div>

			{/* rating and total view section  */}
            <div className="flex items-center justify-between p-4 border-t">
                <div className="flex items-center">
                    <FaStar className="text-yellow-400" />
                    <span className="ml-1 text-gray-700">{news.rating.number}</span>
                </div>
                <div className="flex items-center">
                    <FaEye className="text-gray-500" />
                    <span className="ml-1 text-gray-700">{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;