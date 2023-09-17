/* eslint-disable react/prop-types */

const Cart = ({ cart, remaining, totalCredit, totalPrice }) => {
	return (
		<div className="w-1/4 mx-1 md:mx-3 py-2 px-3 card bg-base-100">
			<h3 className="text-blue-600 font-bold text-2xl mb-3">
				Credit Hour Remaining {remaining} hr
			</h3>
			<p className="border-b-2 text-[#1C1B1B99]"></p>
			<div>
				<h4 className="text-2xl font-semibold pt-3 pb-4">
					Course Name
				</h4>

				<div className="text-lg text-[#1C1B1B99] mb-3">
					{cart.map((course) => (
						<li key={course.id}>{course.name}</li>
					))}
				</div>
				<p className="border-b-2 text-[#1C1B1B99]"></p>
				<h3 className="text-xl text-gray-700 py-3 font-medium">
					Total Credit Hour : {totalCredit}
				</h3>
				<p className="border-b-2 text-[#1C1B1B99]"></p>
				<h2 className="text-xl text-gray-700 pt-3 font-bold">
					Total Price : {totalPrice} USD
				</h2>
			</div>
		</div>
	);
};

export default Cart;