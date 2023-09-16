/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDollarSign,
	faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

const Course = ({ course, handleAddToCart }) => {
	const { name, image, price, credit, description } = course;
    

	return (
		<div className="card card-compact bg-base-300 shadow-xl">
			<figure className="px-4 pt-4">
				<img src={image} alt="" className="rounded-xl" />
			</figure>
			<div className="card-body items-center">
				<h2 className="card-title text-2xl font-bold">{name}</h2>
				<p className="">{description}</p>
				<div className="flex gap-2 my-2">
					<FontAwesomeIcon
						className="text-xl mt-1"
						icon={faDollarSign}
					/>
					<p className="text-lg">Price:{price}</p>
					<FontAwesomeIcon
						className="text-xl mt-1"
						icon={faBookOpen}
					/>
					<p className="text-lg">Credit:{credit}</p>
				</div>
				<button onClick={() => handleAddToCart(course)}
					className="w-full rounded-lg bg-blue-500 hover:bg-blue-600 py-2 text-lg font-bold text-white">
					Select
				</button>
			</div>
		</div>
	);
};

export default Course;
