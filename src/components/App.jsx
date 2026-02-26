import Dashboard from './Dashboard';
import LeagueTable from './LeagueTable';
import LeftColumn from './LeftColumn';
import Logo from './Logo';
import Nav from './Nav';
import MobileNav from './MobileNav';
import Header from './Header';
import NextMatch from './NextMatch';
import RecentForm from './RecentForm';
import RightColumn from './RightColumn';
import SeasonStats from './SeasonStats';
import TopScorer from './TopScorer';
import UpcomingFixts from './UpcomingFixts';
import UserProfile from './UserProfile';
import { useState } from 'react';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false); // For Mobile View Nav

  return (
    <div className='min-h-screen bg-slate-900 text-white'>
      <Header>
        <Logo />
        <Nav />
        <UserProfile isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </Header>
      <MobileNav isNavOpen={isNavOpen} />

      <Dashboard>
        <LeftColumn>
          <NextMatch />
          <RecentForm />
          <UpcomingFixts />
        </LeftColumn>

        <RightColumn>
          <LeagueTable />
          <TopScorer />
          <SeasonStats />
        </RightColumn>
      </Dashboard>
    </div>
  );
}

export default App;
