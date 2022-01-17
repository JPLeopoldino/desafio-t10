import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from 'react';
import api from '../services/api';
import randomColor from '../utils/randomColor';

export interface IUserProps {
  id?: string;
  firstName: string;
  lastName: string;
  participation: number;
  color?: string;
  angle?: number;
}

interface UserContextData {
  loading: boolean;
  user: IUserProps;
  usersList: IUserProps[];
  findOneUser(id: string): Promise<void>;
  findAllUsers(): Promise<void>;
  createUser(payload: IUserProps): Promise<void>;
  // updateUser(payload: IUserProps): Promise<void>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [usersList, setUsersList] = useState<IUserProps[]>([
    // {
    //   id: '1',
    //   firstName: 'Joao',
    //   lastName: 'Pedro',
    //   participation: 20,
    // },
    // {
    //   id: '2',
    //   firstName: 'Carlos',
    //   lastName: 'Cunha',
    //   participation: 30,
    // },
    // {
    //   id: '3',
    //   firstName: 'Roberto',
    //   lastName: 'Silva',
    //   participation: 10,
    // },
    // {
    //   id: '4',
    //   firstName: 'Joao',
    //   lastName: 'Pedro',
    //   participation: 20,
    // },
    // {
    //   id: '5',
    //   firstName: 'Carlos',
    //   lastName: 'Cunha',
    //   participation: 2,
    // },
  ])
  const [user, setUser] = useState<IUserProps>({
    id: '',
    firstName: '',
    lastName: '',
    participation: 0,
  })
  // const { user, clearNewUser, updateUser: updateAuthUser } = useAuth();

  const findAllUsers = useCallback(async () => {
    try {
      setLoading(true);
      const users = await api.get('/api/users')
      await setUsersList(users.data.map((i: any) => { return ({...i, color: randomColor(), angle: (i.participation/100)*360})}));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [])

  const findOneUser = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const user = await api.get(`/api/user/${id}`)
      setUser(user.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [])

  const createUser = useCallback(async (payload: IUserProps) => {
    try {
      setLoading(true);
      await api.post(`/api/user`, {
        firstName: payload.firstName,
        lastName: payload.lastName,
        participation: payload.participation
      })
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <UserContext.Provider
      value={{
        loading,
        findAllUsers,
        usersList,
        user,
        findOneUser,
        createUser,
        // updateUser,
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
