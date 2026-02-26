function Nav() {
  return (
    <nav className='hidden md:flex md:gap-4'>
      <button className='cursor-pointer text-sm text-slate-400 transition-colors ease-in-out hover:text-white'>
        Fixtures
      </button>
      <button className='cursor-pointer text-sm text-slate-400 transition-colors ease-in-out hover:text-white'>
        Standings
      </button>
      <button className='cursor-pointer text-sm text-slate-400 transition-colors ease-in-out hover:text-white'>
        Players
      </button>
    </nav>
  );
}

export default Nav;
