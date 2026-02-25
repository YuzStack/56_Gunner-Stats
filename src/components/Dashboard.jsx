function Dashboard({ children }) {
  return (
    <main className='mx-auto grid max-w-[95%] px-3 pt-24 pb-4 sm:px-6 lg:grid-cols-12 lg:gap-3'>
      {children}
    </main>
  );
}

export default Dashboard;
