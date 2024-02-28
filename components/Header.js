import Link from 'next/link';


export default function Header() {
  return (
  <>
      <div className="w-full"></div>
      <header className="flex items-center justify-between h-12 text-4xl pt-8 pb-8 pl-4 bg-green-500">
      <h1>Cookie Stand Admin</h1>
      <Link href='/overview' className='px-2 mx-4 rounded-md bg-white text-base'>Overview</Link>

      </header>
  </>
  )
}