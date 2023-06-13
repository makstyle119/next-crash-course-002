'use client';
import { useState } from 'react';

const CourseSearch = ({ getSearchResults }: { getSearchResults: Function }) => {
	const [query, setQuery] = useState<string>('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const response = await fetch(`/api/courses/search?query=${query}`);
		const courses = await response.json();
		getSearchResults(courses);
	};

	return (
		<form
			className='search-form'
			onSubmit={handleSubmit}
		>
			<input
				type='text'
				className='search-input'
				placeholder='Search Courses'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button
				className='search-button'
				type='submit'
			>
				Search
			</button>
		</form>
	);
};

export default CourseSearch;
