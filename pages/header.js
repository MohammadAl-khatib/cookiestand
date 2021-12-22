import Link from 'next/link';

function Header(props) {
    return (
        <header className="flex justify-between bg-emerald-400 py-4 items-center px-60">
        <h1 className="text-3xl font-bold ml-4 ">Cookie Stand Admin</h1>
        <div>
        <button className='px-2 h-7 mr-2 bg-emerald-600 text-center rounded-md font-normal text-white' onClick={()=>props.setlogin('')}>Sign Out</button>
        <Link href='overview'><a className='px-2 h-8 mr-4 bg-slate-100 text-center rounded font-medium' >Overview</a></Link>
        </div>
      </header>

    )
}

export default Header
