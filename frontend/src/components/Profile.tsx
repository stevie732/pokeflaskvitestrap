import { useState, useEffect } from 'react';

const Profile = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('/api/token');
        const data = await response.json();
        if (response.ok) {
          setToken(data.token);
        } else {
          console.error('Error fetching token:', data.error);
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">My Profile</h1>
      {token ? (
        <div>
          <p>Your token: {token}</p>
          <h1 className="text-center mb-4">My Pokémon</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src="/charmander.png" className="card-img-top" alt="Charmander" />
                <div className="card-body">
                  <h5 className="card-title">Charmander</h5>
                  <p className="card-text">The Lizard Pokémon</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="/squirtle.png" className="card-img-top" alt="Squirtle" />
                <div className="card-body">
                  <h5 className="card-title">Squirtle</h5>
                  <p className="card-text">The Tiny Turtle Pokémon</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="/bulbasaur.png" className="card-img-top" alt="Bulbasaur" />
                <div className="card-body">
                  <h5 className="card-title">Bulbasaur</h5>
                  <p className="card-text">The Seed Pokémon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
