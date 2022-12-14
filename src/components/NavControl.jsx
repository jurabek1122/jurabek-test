import { useNavigate } from 'react-router-dom'

const NavControl = () => {

  const navigate = useNavigate()

  return (
    <div className="nav-control">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => navigate(-1)}
      >
        <path
          d="M0 30C0 5.4 5.4 0 30 0C54.6 0 60 5.4 60 30C60 54.6 54.6 60 30 60C5.4 60 0 54.6 0 30Z"
          fill="#312783"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M34.9464 20.3656C35.7005 21.1197 35.7005 22.3423 34.9464 23.0964L28.0544 29.9884L34.9464 36.8804C35.7005 37.6345 35.7005 38.8571 34.9464 39.6112C34.1923 40.3652 32.9697 40.3652 32.2157 39.6112L23.9655 31.361C23.2814 30.6769 23.2179 29.6072 23.7751 28.8515C23.841 28.7558 23.9165 28.6648 24.0016 28.5796L32.2157 20.3656C32.9697 19.6115 34.1923 19.6115 34.9464 20.3656Z"
          fill="white"
        />
      </svg>
      <p onClick={() => navigate(-1)}>Назад</p>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => navigate('/')}
      >
        <path
          d="M0 30C0 5.4 5.4 0 30 0C54.6 0 60 5.4 60 30C60 54.6 54.6 60 30 60C5.4 60 0 54.6 0 30Z"
          fill="#312783"
        />
        <path
          d="M21.4286 26.1225V37.1429C21.4286 39.0365 22.9636 40.5714 24.8571 40.5714H35.1429C37.0365 40.5714 38.5714 39.0365 38.5714 37.1429V26.1225M21.4286 26.1225L18 28.5714M21.4286 26.1225L30 20L38.5714 26.1225M38.5714 26.1225L42 28.5714"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p onClick={() => navigate('/')}>Домой</p>
    </div>
  );
};

export default NavControl;