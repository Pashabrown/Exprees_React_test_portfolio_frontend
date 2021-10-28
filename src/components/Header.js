import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "30px solid black",
    padding: "38px",
    width: "80%",
    margin: "auto",
  };

  return (
    <header>
      
      <nav style={navStyle}>
        <Link to="/">
          <div
      style={{
        backgroundColor: '#fc929e',
        width: '100px',
        height: '100px'
      }}
    >Home</div>
        </Link>
        <Link to="/about">
          <div
      style={{
        backgroundColor: '#79b6f2',
        width: '100px',
        height: '100px'
      }}
    >About</div>
        </Link>
        <Link to="/projects">
          <div
      style={{
        backgroundColor: '#8dc891',
        width: '100px',
        height: '100px'
      }}
    >Projects</div>
        </Link>
      </nav>
    </header>
    
  );
}

export default Header;