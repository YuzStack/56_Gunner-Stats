import Dashboard from './Dashboard';
import LeftColumn from './LeftColumn';
import Logo from './Logo';
import Menu from './Menu';
import Nav from './Nav';
import NextMatch from './NextMatch';
import RecentForm from './RecentForm';
import UpcomingFixts from './UpcomingFixts';
import UserProfile from './UserProfile';

function App() {
  return (
    <div className='font-inter min-h-screen bg-slate-900 text-white'>
      <Nav>
        <Logo />
        <Menu />
        <UserProfile />
      </Nav>

      <Dashboard>
        <LeftColumn>
          <NextMatch />
          <RecentForm />
          <UpcomingFixts />
        </LeftColumn>
      </Dashboard>
    </div>
  );
}

export default App;
