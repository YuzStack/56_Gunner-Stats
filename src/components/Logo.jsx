function Logo() {
  return (
    <div className='flex items-center gap-1'>
      <img
        src='1_arsenal-logo.png'
        alt='Gunner Stats Logo'
        className='h-10 w-10'
      />
      <div className='text-lg font-bold'>
        <span>Gunner</span> <span className='text-primary-accent'>Stats</span>
      </div>
    </div>
  );
}

export default Logo;
