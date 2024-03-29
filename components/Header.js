import Link from 'next/link';

export default function Header({user, logout}) {
  return (
  <>
     <header className="flex items-center justify-between h-12 text-4xl pt-8 pb-8 pl-4 bg-green-500">
      <h1>Cookie Stand Admin</h1>
      <div className='flex'>
        {user && (
          <>
            <button className='px-2 mx-4 rounded-md bg-white text-base'>{user.username}</button>
            <button className=' text-base px-2 mx-4 rounded-md bg-green-700 text-white' onClick={logout}>Sign Out</button>
            <Link href='/overview' className='px-2 mx-4 rounded-md bg-white text-base'>Overview</Link>
          </>
        )}
      </div>
      </header>
  </>
  )
}