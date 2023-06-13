import { NextResponse } from 'next/server';
import courses from '../data.json';

export async function GET(request: any) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get('query');
	const filteredCourses = courses.filter((course) => {
		return course.title
			.toLocaleLowerCase()
			.includes((query || '').toLocaleLowerCase());
	});
	return NextResponse.json(filteredCourses);
}
