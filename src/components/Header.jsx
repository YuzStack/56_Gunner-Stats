function Header({ children }) {
  return (
    <header className='sticky top-0 z-10 h-16 border-b border-white/10 bg-slate-900'>
      <div className='flex h-full items-center justify-between px-3 sm:mx-auto sm:max-w-[92%] sm:px-6'>
        {children}
      </div>
    </header>
  );
}

export default Header;
