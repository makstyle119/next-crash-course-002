import Link from 'next/link';

// async function fetchCourses() {
// 	const response = await fetch('http://localhost:3000/api/courses', {
// 		next: {
// 			revalidate: 60 * 60 * 24,
// 		},
// 	});
// 	const courses = await response.json();
// 	return courses;
// }

const Courses = ({ courses }: { courses: any }) => {
	// const courses = await fetchCourses();
	return (
		<div className='courses'>
			{courses.map((course: any) => (
				<div
					key={course.id}
					className='card'
				>
					<h3>{course.title}</h3>
					<small>Level: {course.level}</small>
					<p>{course.description}</p>
					<Link
						href={course.link}
						target='_blank'
						className='btn'
					>
						Go To Course
					</Link>
				</div>
			))}
		</div>
	);
};

export default Courses;
