function Dashboard({ children }) {
  return (
    <main className='grid gap-6 px-3 py-4 sm:mx-auto sm:max-w-[92%] sm:px-6 sm:py-8 lg:grid-cols-12 lg:gap-8'>
      {children}
    </main>
  );
}

export default Dashboard;
