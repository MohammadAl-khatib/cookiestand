import Link from 'next/link';

function Header() {
    return (
        <header className="flex justify-between bg-emerald-500 py-4 items-center ">
        <h1 className="text-3xl font-bold ml-4 ">Cookie Stand Admin</h1>
        <Link href='overview'><a className='px-2 h-6 mr-4 bg-slate-200 text-center rounded font-medium' >Overview</a></Link>
      </header>

    )
}

export default Header
