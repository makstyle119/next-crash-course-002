import { Poppins } from 'next/font/google';
import './globals.css';
import Header from './componets/Header';

// const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'Next Crash Course 2 || MAKSTYLE119',
	keywords:
		'web development, nextjs, reactjs, typescript, crash course, MAKSTYLE119',
	description: 'Next Crash Course 2',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<Header />
				<main className='container'>{children}</main>
			</body>
		</html>
	);
}
