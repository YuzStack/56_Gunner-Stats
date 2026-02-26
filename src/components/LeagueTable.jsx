function LeagueTable() {
  return (
    <div className='space-y-4'>
      <div className='flex items-center gap-2'>
        <span className='bg-primary-accent h-6 w-1 rounded-full'></span>
        <h2 className='text-xl font-bold'>League Table</h2>
      </div>

      <div className='border-light-border rounded-xl border bg-slate-800'>
        <h3 className='border-b border-slate-700 p-3 text-lg font-bold sm:p-6'>
          Premier League
        </h3>

        <div className='overflow-x-auto'>
          <table className='w-full text-left text-sm'>
            <thead className='bg-slate-800/50 text-xs text-slate-400 uppercase'>
              <tr>
                <th className='px-6 py-3 font-medium'>Pos</th>
                <th className='px-6 py-3 font-medium'>Club</th>
                <th className='px-6 py-3 text-center font-medium'>Pl</th>
                <th className='px-6 py-3 text-center font-medium'>GD</th>
                <th className='px-6 py-3 text-center font-medium'>Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-primary-accent/10 hover:bg-primary-accent/20 border-b border-slate-700/50 transition-colors last:border-0'>
                <td className='px-6 py-4 font-medium text-slate-400'>1</td>
                <td className='flex items-center gap-3 px-6 py-4'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg'
                    alt='Arsenal FC'
                    className='h-6 w-6'
                  />
                  <span className='font-medium text-white'>Arsenal</span>
                </td>
                <td className='px-6 py-4 text-center text-slate-400'>30</td>
                <td className='px-6 py-4 text-center text-slate-400'>+43</td>
                <td className='text-primary-accent px-6 py-4 text-center font-bold'>
                  73
                </td>
              </tr>

              <tr className='border-b border-slate-700/50 transition-colors last:border-0 hover:bg-slate-700/30'>
                <td className='px-6 py-4 font-medium text-slate-400'>2</td>
                <td className='flex items-center gap-3 px-6 py-4'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg'
                    alt='Manchester City'
                    className='h-6 w-6'
                  />
                  <span className='font-medium text-white'>Man City</span>
                </td>
                <td className='px-6 py-4 text-center text-slate-400'>29</td>
                <td className='px-6 py-4 text-center text-slate-400'>+48</td>
                <td className='px-6 py-4 text-center font-bold text-white'>
                  67
                </td>
              </tr>

              <tr className='border-b border-slate-700/50 transition-colors last:border-0 hover:bg-slate-700/30'>
                <td className='px-6 py-4 font-medium text-slate-400'>3</td>
                <td className='flex items-center gap-3 px-6 py-4'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg'
                    alt='Newcastle'
                    className='h-6 w-6'
                  />
                  <span className='font-medium text-white'>Newcastle</span>
                </td>
                <td className='px-6 py-4 text-center text-slate-400'>29</td>
                <td className='px-6 py-4 text-center text-slate-400'>+27</td>
                <td className='px-6 py-4 text-center font-bold text-white'>
                  56
                </td>
              </tr>

              <tr className='border-b border-slate-700/50 transition-colors last:border-0 hover:bg-slate-700/30'>
                <td className='px-6 py-4 font-medium text-slate-400'>4</td>
                <td className='flex items-center gap-3 px-6 py-4'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg'
                    alt='Manchester United'
                    className='h-6 w-6'
                  />
                  <span className='font-medium text-white'>Man Utd</span>
                </td>
                <td className='px-6 py-4 text-center text-slate-400'>29</td>
                <td className='px-6 py-4 text-center text-slate-400'>+7</td>
                <td className='px-6 py-4 text-center font-bold text-white'>
                  56
                </td>
              </tr>

              <tr className='border-b border-slate-700/50 transition-colors last:border-0 hover:bg-slate-700/30'>
                <td className='px-6 py-4 font-medium text-slate-400'>5</td>
                <td className='flex items-center gap-3 px-6 py-4'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg'
                    alt='Tottenham Hotspur'
                    className='h-6 w-6'
                  />
                  <span className='font-medium text-white'>Tottenham</span>
                </td>
                <td className='px-6 py-4 text-center text-slate-400'>30</td>
                <td className='px-6 py-4 text-center text-slate-400'>+11</td>
                <td className='px-6 py-4 text-center font-bold text-white'>
                  53
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='border-t border-slate-700'>
          <button className='mx-auto flex cursor-pointer p-3 text-xs font-medium text-slate-400 transition-colors hover:text-white sm:p-6'>
            View Full Table
          </button>
        </div>
      </div>

      <button className='text-primary-accent mx-auto flex cursor-pointer text-sm font-medium transition-colors hover:text-red-400'>
        View Full Standings →
      </button>
    </div>
  );
}

export default LeagueTable;
