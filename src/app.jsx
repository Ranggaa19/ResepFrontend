import React, { useEffect, useState } from 'react';
import { getUser } from './api';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser();
      setUser(userData);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>{process.env.VITE_APP_NAME} - Welcome</h1>
      {user ? (
        <div>
          <p>Hello, {user.name}!</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default App;
