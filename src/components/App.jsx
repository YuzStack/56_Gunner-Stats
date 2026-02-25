import Logo from './Logo';
import Menu from './Menu';
import Nav from './Nav';
import UserProfile from './UserProfile';

function App() {
  return (
    <div className='font-inter min-h-screen bg-slate-900 text-white'>
      <Nav>
        <Logo />
        <Menu />
        <UserProfile />
      </Nav>
    </div>
  );
}

export default App;
