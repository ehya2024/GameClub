import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import { useTheme } from './hooks/useTheme';

function App() {

  const [searchedText, setSearchedText] = useState(null);
  const {mode} = useTheme();

  return (
    <div className={`App ${mode}`}>
      <Navbar onSearchedText={(searchedValue) => setSearchedText(searchedValue)} />
      <Main searchedText={searchedText} />
      <BackToTop />
    </div>
  );
}

export default App;