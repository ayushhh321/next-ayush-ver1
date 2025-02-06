import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faUser, faList, faComments } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="aside">
      <div className="logo">
        <Link href="/">Ayush</Link>
      </div>
      <div className="nav-toggler">
        <span></span>
      </div>
      <ul className="nav">
        <li><Link href="#home" className="active"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
        <li><Link href="#portfolio"><FontAwesomeIcon icon={faBriefcase} /> Works</Link></li>
        <li><Link href="#about"><FontAwesomeIcon icon={faUser} /> About</Link></li>
        <li><Link href="#techstack"><FontAwesomeIcon icon={faList} /> Tech Stack</Link></li>
        <li><Link href="#contact"><FontAwesomeIcon icon={faComments} /> Contact</Link></li>
      </ul>
    </header>
  );
};

export default Header;