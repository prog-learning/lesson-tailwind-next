import Link from 'next/link';

const pagePaths = [
  'lesson01',
  'lesson02',
  'lesson03',
  'lesson04',
  'lesson05',
  'lesson06',
];

export const Layout = ({ children }) => {
  return (
    <div>
      <header className='p-6 bg-teal-400'>
        <h1 className='text-2xl text-white font-bold'>Lesson Tailwind CSS</h1>
      </header>
      <div className='flex'>
        <div className='mr-6 h-screen flex flex-col'>
          <Link href='/'>
            <a className='block p-4 text-teal-400 hover:bg-teal-300'>HOME</a>
          </Link>
          {pagePaths.map((pagePath) => (
            <Link href={`/${pagePath}`} key={pagePath}>
              <a className='block p-4 text-teal-400 hover:bg-teal-300'>
                {pagePath}
              </a>
            </Link>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};
