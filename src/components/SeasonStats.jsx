function SeasonStats() {
  return (
    <div className='from-light-red rounded-xl bg-linear-to-br to-[#7F1D1D] p-3 sm:p-6'>
      <h3 className='mb-4 text-lg font-bold'>Season Stats</h3>
      <div className='grid grid-cols-2 gap-4'>
        <div className='rounded-lg bg-linear-to-br from-[#BF0106] to-[#8C0E10] p-3'>
          <p className='mb-2 text-3xl font-bold'>72</p>
          <p className='text-xs text-[#EDD1D0] uppercase'>Goals Scored</p>
        </div>
        <div className='rounded-lg bg-linear-to-br from-[#A2080B] to-[#6E1516] p-3'>
          <p className='mb-2 text-3xl font-bold'>12</p>
          <p className='text-xs text-[#EDD1D0] uppercase'>Clean Sheets</p>
        </div>
      </div>
    </div>
  );
}

export default SeasonStats;
