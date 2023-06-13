import Link from 'next/link';

async function fetchRepoContents(name: string) {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const response = await fetch(
		`http://api.github.com/repos/makstyle119/${name}/contents`,
		{
			next: {
				revalidate: 60 * 60 * 24,
			},
		}
	);
	const contents = response.json();
	return contents;
}

const RepoDirs = async ({ name }: { name: string }) => {
	const contents = await fetchRepoContents(name);
	const dirs = contents.filter((content: any) => content.type === 'dir');
	return (
		<>
			<h3>Directories</h3>
			<ul>
				{dirs.map((dir: any) => (
					<li key={dir.path}>
						<Link href={`/code/repos/${name}/${dir.path}`}>{dir.name}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default RepoDirs;
