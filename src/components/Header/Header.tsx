import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to={'/'}>Calorie Tracker</Link>
      </header>
    </>
  );
};

export default Header;
