import { useEffect, useState } from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);
	const [remaining, setRemaining] = useState(0);
	const [totalCredit, setTotalCredit] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() =>{
        fetch('/data.json')
        .then(res =>res.json())
        .then(data =>setCourses(data))
    }, [])

    const handleAddToCart = (course) =>{
        const isExist = cart.find((item) => item.id == course.id);
		let count = course.credit;
		let countPrice = course.price;

        if (isExist) {
            return toast("Already selected");
        } else {
			cart.forEach(item =>{
				count += item.credit;
				countPrice += item.price;
			});

			const totalRemaing = 20 - count;
			if (count > 20) {
				return toast("You dont have enough credit remaining");
			} else{
				setTotalCredit(count);
				setTotalPrice(countPrice);
				setRemaining(totalRemaing);
				setCart([...cart, course]);
			}
        }
    }

    return (
		<div className="max-w-screen-xl mx-auto px-6 md:px-8 py-2 my-5">
			<h1 className="text-4xl font-bold text-center mb-6">
				Course Registration
			</h1>
			<div className="flex ">
				<div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{courses.map((course) => (
						<Course
							key={course.id}
							course={course}
							handleAddToCart={handleAddToCart}
						></Course>
					))}
				</div>
				<Cart
					cart={cart}
					remaining={remaining}
					totalCredit={totalCredit}
					totalPrice={totalPrice}
				></Cart>
			</div>
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default Courses;