import React, { FC, useState } from 'react';
import { User } from '../../interfaces/user';

type WellabeeProviderProps = {
  children: React.ReactNode;
};

type Context = {
  user: User;
  updateUser: (value: User) => void;
};

const initialContext = {
  user: {} as User,
  updateUser: (value: User) => {},
};

const WellabeeContext = React.createContext<Context>(initialContext);

/**
 * My context provider is used to send user data between components.
 */
export const WellabeeProvider: FC<WellabeeProviderProps> = ({ children }) => {
  const [context, setContext] = useState(initialContext);

  const updateUser = (value: User) => {
    setContext({
      ...context,
      user: value,
    });
  };

  return (
    <WellabeeContext.Provider value={{ ...context, updateUser }}>
      {children}
    </WellabeeContext.Provider>
  );
};

export const useWellabeeContext = () => React.useContext(WellabeeContext);
