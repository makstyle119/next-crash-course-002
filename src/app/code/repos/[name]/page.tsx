import Repo from '@/app/componets/Repo';
import RepoDirs from '@/app/componets/RepoDirs';
import LoadingPage from '@/app/loading';
import Link from 'next/link';
import React, { Suspense } from 'react';

const RepoPage = ({ params: { name } }: any) => {
	return (
		<div className='card'>
			<Link
				href={`/code/repos`}
				className='btn btn-back'
			>
				Back to Repositories
			</Link>
			<Suspense fallback={<LoadingPage />}>
				<Repo name={name} />
			</Suspense>
			<Suspense fallback={<LoadingPage />}>
				<RepoDirs name={name} />
			</Suspense>
		</div>
	);
};

export default RepoPage;
