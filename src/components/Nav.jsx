function Nav({ children }) {
  return (
    <nav className='fixed top-0 right-0 left-0 z-10 h-16 border-b border-[#263144] bg-slate-900'>
      <div className='mx-auto flex h-full max-w-[90%] items-center justify-between px-3 sm:px-6'>
        {children}
      </div>
    </nav>
  );
}

export default Nav;
