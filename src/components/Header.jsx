import logo from "../assets/images/logo.png";
import call from "../assets/images/call.png";
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()
  
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" onClick={() => navigate('/')} />
        <svg
          width="4"
          height="40"
          viewBox="0 0 4 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="4" height="40" fill="#E30613" />
        </svg>
        <p>Сеть многопрофильных медицинских клиник</p>
      </div>
      <div className="call">
        <img src={call} alt="call" />
        <span>CALL CENTER</span>
        <p>1183</p>
      </div>
    </div>
  );
};

export default Header;
