import { Trophy } from 'lucide-react';

function TopScorer() {
  return (
    <div className='space-y-4'>
      <div className='border-light-border relative rounded-xl border bg-slate-800 p-3 sm:p-6'>
        <div className='absolute top-0 right-0 p-4 opacity-10'>
          <Trophy color='#ef0107' size={96} />
        </div>

        <h3 className='mb-6 text-sm font-medium tracking-wide text-slate-400 uppercase'>
          TOP SCORER
        </h3>

        <div className='flex items-center gap-4'>
          <div className='border-light-red flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-slate-700'>
            <img
              src='https://resources.premierleague.com/premierleague/photos/players/250x250/p223340.png'
              alt='Arsenal FC'
              className='h-full w-full'
            />
          </div>
          <div>
            <h4 className='mb-1 text-xl font-bold'>Bukayo Saka</h4>
            <span className='mb-4 text-sm text-slate-400'>Right Winger</span>
            <div className='flex items-center gap-5 p-2'>
              <div>
                <h5 className='text-light-red mb-1.5 text-2xl font-bold'>12</h5>
                <p className='text-xs text-[#64748B] uppercase'>Goals</p>
              </div>
              <div className='h-8 w-px bg-[#334155]'></div>
              <div>
                <h5 className='mb-1.5 text-2xl font-bold'>10</h5>
                <p className='text-xs text-[#64748B] uppercase'>Assists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className='text-light-red mx-auto flex cursor-pointer text-sm font-medium duration-300 hover:text-red-400'>
        View Squad →
      </button>
    </div>
  );
}

export default TopScorer;
