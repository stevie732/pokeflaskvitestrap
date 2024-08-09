import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src="/pikachu.png" alt="Pikachu" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1 className="display-4">Welcome to PokéApp</h1>
          <p className="lead">Catch 'em all with our Pokemon app!</p>
          <Link to='/catch-pokemon' className="btn btn-danger btn-lg">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
