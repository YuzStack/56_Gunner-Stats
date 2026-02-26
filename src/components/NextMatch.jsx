import { Calendar, Clock, MapPin } from 'lucide-react';

function NextMatch() {
  return (
    <div>
      <div className='mb-4 flex items-center gap-2'>
        <span className='bg-primary-accent h-6 w-1 rounded-full'></span>
        <h2 className='text-xl font-bold'>Next Match</h2>
      </div>

      <div className='border-light-border hover:shadow-dark-red space-y-6 rounded-xl border bg-slate-800 p-3 duration-300 ease-in-out hover:shadow-sm sm:p-6'>
        <div className='flex items-center justify-between'>
          <span className='bg-red-accent text-primary-accent rounded-full px-3 py-2 text-xs font-medium'>
            Premier League
          </span>
          <span className='flex items-center gap-1.5 text-slate-400'>
            <Clock size={16} />
            <span className='text-xs font-medium'>Matchday 28</span>
          </span>
        </div>

        <div className='flex items-center justify-between border-b border-[#2E3B4E] pb-8'>
          <div className='flex flex-col items-center gap-3'>
            <div className='border-light-border flex h-16 w-16 items-center justify-center rounded-full border bg-slate-700'>
              <img
                src='https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg'
                alt='Arsenal FC'
                className='h-9 w-9'
              />
            </div>
            <span className='text-lg font-bold'>Arsenal</span>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <span className='text-3xl font-bold text-slate-500'>VS</span>
            <span className='text-primary-accent text-sm'>17:30</span>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <div className='border-light-border flex h-16 w-16 items-center justify-center rounded-full border bg-slate-700'>
              <img
                src='https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg'
                alt='Chelsea FC'
                className='h-9 w-9'
              />
            </div>
            <span className='text-lg font-bold'>Chelsea</span>
          </div>
        </div>

        <div className='flex items-center justify-between text-slate-400'>
          <div className='flex items-center gap-2'>
            <Calendar size={16} />
            <span className='text-sm'>Sun, 01 Mar</span>
          </div>
          <div className='flex items-center gap-2'>
            <MapPin size={16} />
            <span className='text-sm'>Emirates Stadium</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextMatch;
