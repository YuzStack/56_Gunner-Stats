import { Menu, User, X } from 'lucide-react';

function UserProfile({ isNavOpen, setIsNavOpen }) {
  return (
    <div className='flex items-center gap-2'>
      <button className='cursor-pointer rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white'>
        <User className='h-5 w-5 md:h-6 md:w-6' />
      </button>
      <button
        onClick={() => setIsNavOpen(curIsMenuOpen => !curIsMenuOpen)}
        className='cursor-pointer rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white md:hidden'
      >
        {isNavOpen ? (
          <X className='h-5 w-5 md:h-6 md:w-6' />
        ) : (
          <Menu className='h-5 w-5 md:h-6 md:w-6' />
        )}
      </button>
    </div>
  );
}

export default UserProfile;
