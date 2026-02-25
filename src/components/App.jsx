import Dashboard from './Dashboard';
import LeftColumn from './LeftColumn';
import Logo from './Logo';
import Menu from './Menu';
import Nav from './Nav';
import NextMatch from './NextMatch';
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
        </LeftColumn>
      </Dashboard>
    </div>
  );
}

export default App;
