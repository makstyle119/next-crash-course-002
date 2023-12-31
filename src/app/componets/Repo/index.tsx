// import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa';

// async function fetchRepo(name: string) {
// 	const response = await fetch(
// 		`http://api.github.com/repos/makstyle119/${name}`,
// 		{
// 			next: {
// 				revalidate: 60 * 60 * 24,
// 			},
// 		}
// 	);
// 	const repo = response.json();
// 	return repo;
// }
// const Repo = async ({ name }: { name: string }) => {
// 	const repo: any = await fetchRepo(name);
// 	return (
// 		<>
// 			<h2>{repo?.name}</h2>
// 			<p>{repo?.description}</p>
// 			<div className='card-stats'>
// 				<div className='card-stat'>
// 					<FaStar />
// 					<span>{repo?.stargazers_count}</span>
// 				</div>
// 				<div className='card-stat'>
// 					<FaCodeBranch />
// 					<span>{repo?.forks_count}</span>
// 				</div>
// 				<div className='card-stat'>
// 					<FaEye />
// 					<span>{repo?.watchers_count}</span>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Repo;

'use client';
import React, { useEffect, useState } from 'react';
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa';

const Repo = ({ name }: { name: string }) => {
	const [repo, setRepo] = useState<any>(null);

	useEffect(() => {
		const fetchRepo = async () => {
			const response = await fetch(
				`http://api.github.com/repos/makstyle119/${name}`,
				{
					next: {
						revalidate: 60 * 60 * 24,
					},
				}
			);
			const repo = await response.json();
			setRepo(repo);
		};

		fetchRepo();
	}, []);

	if (!repo) {
		return <div>Detail loading...</div>;
	}

	return (
		<>
			<h2>{repo?.name}</h2>
			<p>{repo?.description}</p>
			<div className='card-stats'>
				<div className='card-stat'>
					<FaStar />
					<span>{repo?.stargazers_count}</span>
				</div>
				<div className='card-stat'>
					<FaCodeBranch />
					<span>{repo?.forks_count}</span>
				</div>
				<div className='card-stat'>
					<FaEye />
					<span>{repo?.watchers_count}</span>
				</div>
			</div>
		</>
	);
};

export default Repo;
