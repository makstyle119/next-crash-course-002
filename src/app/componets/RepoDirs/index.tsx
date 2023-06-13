// import Link from 'next/link';

// async function fetchRepoContents(name: string) {
// 	await new Promise((resolve) => setTimeout(resolve, 1000));

// 	const response = await fetch(
// 		`http://api.github.com/repos/makstyle119/${name}/contents`,
// 		{
// 			next: {
// 				revalidate: 60 * 60 * 24,
// 			},
// 		}
// 	);
// 	const contents = response.json();
// 	return contents;
// }

// const RepoDirs = async ({ name }: { name: string }) => {
// 	const contents = await fetchRepoContents(name);
// 	const dirs = contents.filter((content: any) => content.type === 'dir');
// 	return (
// 		<>
// 			<h3>Directories</h3>
// 			<ul>
// 				{dirs.map((dir: any) => (
// 					<li key={dir.path}>
// 						<Link href={`/code/repos/${name}/${dir.path}`}>{dir.name}</Link>
// 					</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// };

// export default RepoDirs;

'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const RepoDirs = ({ name }: { name: string }) => {
	const [repoDirs, setRepoDirs] = useState([]);

	useEffect(() => {
		const fetchRepoDirs = async () => {
			const response = await fetch(
				`http://api.github.com/repos/makstyle119/${name}/contents`,
				{
					next: {
						revalidate: 60 * 60 * 24,
					},
				}
			);
			const repo = await response.json();
			setRepoDirs(repo);
		};

		fetchRepoDirs();
	}, []);

	if (!repoDirs) {
		return <div>Loading Directories...</div>;
	}

	return (
		<div>
			<h3>Directories</h3>
			<ul>
				{repoDirs.map((dir: any) => (
					<li key={dir.path}>
						<Link href={`/code/repos/${name}/${dir.path}`}>{dir.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default RepoDirs;
