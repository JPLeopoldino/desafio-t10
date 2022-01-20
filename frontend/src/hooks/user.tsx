import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
import api from '../services/api';

export interface IUserProps {
  id?: string;
  firstName: string;
  lastName: string;
  participation: number | null;
}

interface UserContextData {
  loading: boolean;
  deleteLoading: boolean;
  usersList: IUserProps[];
  setUsersList: Dispatch<SetStateAction<IUserProps[]>>;
  deleteUser(id?: string): Promise<void>;
  findAllUsers(): Promise<void>;
  createUser(payload: IUserProps): Promise<void>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [usersList, setUsersList] = useState<IUserProps[]>([]);

  const findAllUsers = useCallback(async () => {
    try {
      setLoading(true);
      const users = await api.get('/api/users')
      setUsersList(users.data);
    } catch (error) {
        console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const createUser = useCallback(async (payload: IUserProps) => {
    try {
      setLoading(true);
      await api.post(`/api/user`, {
        firstName: payload.firstName,
        lastName: payload.lastName,
        participation: payload.participation
      })
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteUser = useCallback(async (id?: string) => {
    try {
      setDeleteLoading(true);
      await api.delete(`/api/user/${id}`);
      setDeleteLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        loading,
        findAllUsers,
        setUsersList,
        usersList,
        createUser,
        deleteLoading,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = (): UserContextData => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within an UserProvider');
  }

  return context;
};

export { useUser, UserProvider };
