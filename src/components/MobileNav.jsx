function MobileNav({ isNavOpen }) {
  return (
    <div
      className={`${isNavOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} sticky top-16 z-10 overflow-hidden transition-all duration-300 ease-in-out md:hidden`}
    >
      <nav className='flex flex-col gap-1 border-y border-white/10 bg-slate-900 p-3'>
        <button className='bg-primary-accent/10 text-primary-accent cursor-pointer rounded-lg px-4 py-3 text-left text-sm font-medium'>
          Dashboard
        </button>
        <button className='cursor-pointer rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white'>
          Fixtures
        </button>
        <button className='cursor-pointer rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white'>
          Standings
        </button>
        <button className='cursor-pointer rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white'>
          Players
        </button>
      </nav>
    </div>
  );
}

export default MobileNav;
