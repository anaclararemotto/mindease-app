// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// type User = {
//   id: string;
//   email: string;
// };

// type AuthContextData = {
//   user: User | null;
//   isAuthenticated: boolean;
//   loading: boolean;
//   login: (userData: User) => Promise<void>;
//   logout: () => Promise<void>;
// };

// const AuthContext = createContext<AuthContextData>(
//   {} as AuthContextData
// );

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadUser();
//   }, []);

//   async function loadUser() {
//     try {
//       const storedUser = await AsyncStorage.getItem('@user');

//       if (storedUser) {
//         setUser(JSON.parse(storedUser));
//       }
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function login(userData: User) {
//     await AsyncStorage.setItem('@user', JSON.stringify(userData));
//     setUser(userData);
//   }

//   async function logout() {
//     await AsyncStorage.removeItem('@user');
//     setUser(null);
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         isAuthenticated: !!user,
//         loading,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
// 1. Importações do Firebase
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";

type User = {
  id: string;
  email: string;
};

type AuthContextData = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  logout: () => Promise<void>;
  // O login e signup serão feitos diretamente nas views chamando o Firebase
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2. Monitoramento em tempo real do Firebase
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          id: firebaseUser.uid,
          email: firebaseUser.email || "",
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Limpa o monitor ao desmontar
  }, []);

  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
