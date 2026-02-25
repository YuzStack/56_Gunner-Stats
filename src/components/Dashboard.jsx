function Dashboard({ children }) {
  return (
    <main className='mx-auto grid max-w-[95%] gap-6 px-3 pt-24 pb-6 sm:px-6 lg:grid-cols-12 lg:gap-8'>
      {children}
    </main>
  );
}

export default Dashboard;
