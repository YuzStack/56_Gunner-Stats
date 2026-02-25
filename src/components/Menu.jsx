function Menu() {
  return (
    <div className='flex gap-2.5'>
      <button className='cursor-pointer text-sm text-slate-400 duration-300 ease-in-out hover:text-white'>
        Fixtures
      </button>
      <button className='cursor-pointer text-sm text-slate-400 duration-300 ease-in-out hover:text-white'>
        Standings
      </button>
      <button className='cursor-pointer text-sm text-slate-400 duration-300 ease-in-out hover:text-white'>
        Players
      </button>
    </div>
  );
}

export default Menu;
