function RecentForm() {
  return (
    <div className='border-light-border rounded-xl border bg-slate-800 p-3 sm:p-6'>
      <h3 className='mb-4 text-sm font-medium tracking-wide text-slate-400 uppercase'>
        Recent Form
      </h3>
      <ul className='flex items-center justify-between'>
        <li className='flex flex-col items-center gap-2'>
          <div className='bg-loss-accent-fill flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-500'>
            <span className='text-red-500'>L</span>
          </div>
          <span className='text-xs text-slate-500'>MUN</span>
        </li>

        {/* <li className='flex flex-col items-center gap-2'>
          <div className='bg-win-accent-fill flex h-10 w-10 items-center justify-center rounded-full border-2 border-emerald-500'>
            <span className='text-emerald-500'>W</span>
          </div>
          <span className='text-xs text-slate-500'>LEE</span>
        </li> */}

        <li className='flex flex-col items-center gap-2'>
          <div className='bg-win-accent-fill flex h-10 w-10 items-center justify-center rounded-full border-2 border-emerald-500'>
            <span className='text-emerald-500'>W</span>
          </div>
          <span className='text-xs text-slate-500'>SUN</span>
        </li>

        <li className='flex flex-col items-center gap-2'>
          <div className='bg-draw-accent-fill flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-500'>
            <span className='text-amber-500'>D</span>
          </div>
          <span className='text-xs text-slate-500'>BRE</span>
        </li>

        <li className='flex flex-col items-center gap-2'>
          <div className='bg-draw-accent-fill flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-500'>
            <span className='text-amber-500'>D</span>
          </div>
          <span className='text-xs text-slate-500'>WOL</span>
        </li>

        <li className='flex flex-col items-center gap-2'>
          <div className='bg-win-accent-fill flex h-10 w-10 items-center justify-center rounded-full border-2 border-emerald-500'>
            <span className='text-emerald-500'>W</span>
          </div>
          <span className='text-xs text-slate-500'>TOT</span>
        </li>
      </ul>
    </div>
  );
}

export default RecentForm;
