import { ChevronRight } from 'lucide-react';

function UpcomingFixts() {
  return (
    <div className='space-y-4'>
      <div className='border-light-border rounded-xl border bg-slate-800 p-3 sm:p-6'>
        <div className='mb-3 flex items-center justify-between'>
          <h3 className='text-lg font-bold'>Upcoming Fixtures</h3>
          <button className='text-primary-accent cursor-pointer text-xs transition-colors hover:text-red-400'>
            View All
          </button>
        </div>
        <ul className='space-y-4'>
          <li className='group cursor-pointer rounded-lg bg-slate-900/50 p-4 transition-colors hover:bg-slate-700/50'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-800'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg'
                    alt='Southampton FC'
                    className='h-6 w-6'
                  />
                </div>
                <div className='flex flex-col gap-0'>
                  <p className='group-hover:text-primary-accent text-base font-semibold transition-colors'>
                    Southampton
                  </p>
                  <span className='text-xs text-slate-400'>
                    Home &bull; 20:00
                  </span>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-sm font-medium text-slate-300'>
                  21 Apr
                </span>
                <button className='text-light-border transition-colors group-hover:text-white'>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </li>

          <li className='group cursor-pointer rounded-lg bg-slate-900/50 p-4 transition-colors hover:bg-slate-700/50'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-800'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg'
                    alt='Manchester City FC'
                    className='h-6 w-6'
                  />
                </div>
                <div className='flex flex-col gap-0'>
                  <p className='group-hover:text-primary-accent text-base font-semibold transition-colors'>
                    Man City
                  </p>
                  <span className='text-xs text-slate-400'>
                    Away &bull; 20:00
                  </span>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-sm font-medium text-slate-300'>
                  26 Apr
                </span>
                <button className='text-light-border transition-colors group-hover:text-white'>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </li>

          <li className='group cursor-pointer rounded-lg bg-slate-900/50 p-4 transition-colors hover:bg-slate-700/50'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-800'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg'
                    alt='West Ham United FC'
                    className='h-6 w-6'
                  />
                </div>
                <div className='flex flex-col gap-0'>
                  <p className='group-hover:text-primary-accent text-base font-semibold transition-colors'>
                    West Ham
                  </p>
                  <span className='text-xs text-slate-400'>
                    Home &bull; 16:00
                  </span>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-sm font-medium text-slate-300'>
                  02 May
                </span>
                <button className='text-light-border transition-colors group-hover:text-white'>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button className='text-primary-accent mx-auto flex cursor-pointer text-sm font-medium transition-colors hover:text-red-400'>
        View Full Schedule →
      </button>
    </div>
  );
}

export default UpcomingFixts;
