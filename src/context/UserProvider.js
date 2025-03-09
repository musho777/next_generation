import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const generateRandomToken = () => {
    return `mock-jwt-token-${Math.random().toString(36).substr(2, 9)}`;
  };
  const registerUser = (data) => {
    return new Promise((resolve, reject) => {
      setLoading(true);

      setTimeout(() => {
        if (users.some(user => user.email === data.email)) {
          setError("User already exists");
          setLoading(false);
          // reject("User already exists");
          return;
        }

        const newUser = data;
        setUsers([...users, newUser]);
        setError("");
        setLoading(false);
        resolve("User registered successfully");
      }, 1000);
    });
  };

  const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
      setLoading(true); // Set loading state to true before starting the process

      setTimeout(() => {
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
          setCurrentUser(user);
          const token = generateRandomToken();
          setLoading(false);
          console.log(user)
          resolve({ user, token });
        } else {
          setError("invalid_credentials");
          setLoading(false);
        }
      }, 1000);
    });
  };

  return (
    <UserContext.Provider value={{ users, currentUser, registerUser, loginUser, error, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
