'use client';
import { useEffect, useState } from 'react';
import LoadingPage from './loading';
import Courses from './componets/Courses';
import CourseSearch from './componets/CourseSearch';

const HomePage = () => {
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchCourses = async () => {
			const res = await fetch('/api/courses');
			const data = await res.json();
			setCourses(data);
			setLoading(false);
		};

		fetchCourses();
	}, []);

	if (loading) {
		return <LoadingPage />;
	}
	return (
		<div>
			<h1>Welcome to Home Page!</h1>
			<CourseSearch getSearchResults={(result: any) => setCourses(result)} />
			<Courses courses={courses} />
		</div>
	);
};

export default HomePage;
