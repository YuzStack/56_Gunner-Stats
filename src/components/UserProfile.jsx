import { User } from 'lucide-react';

function UserProfile() {
  return (
    <button className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-sm text-slate-400 duration-300 ease-in-out hover:bg-slate-800 hover:text-white'>
      <User />
    </button>
  );
}

export default UserProfile;
