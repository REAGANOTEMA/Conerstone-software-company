"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { apiService } from '../services/api';

export type Role = "admin" | "director" | "staff" | "client" | "student";

export interface User {
  id: number;
  student_id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: Role;
  total_credits?: number;
  completed_credits?: number;
  gpa?: number;
  current_semester?: string;
  academic_year?: number;
  avatar?: string;
  bio?: string;
  phone?: string;
  location?: string;
  isApproved?: boolean;
  registrationDate?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  error: string | null;
  loading: boolean;
  isAuthenticated: boolean;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (userData: {
    student_id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role?: Role;
  }) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  checkAuth: () => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

const initialState: AuthState = {
  user: null,
  token: null,
  error: null,
  loading: false,
  isAuthenticated: false,
};

const authReducer = (state: AuthState, action: any) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload.user, token: action.payload.token, loading: false, isAuthenticated: true };
    case 'LOGIN_FAILURE':
      return { ...state, error: action.payload, loading: false, isAuthenticated: false };
    case 'REGISTER_START':
      return { ...state, loading: true, error: null };
    case 'REGISTER_SUCCESS':
      return { ...state, user: action.payload.user, token: action.payload.token, loading: false, isAuthenticated: true };
    case 'REGISTER_FAILURE':
      return { ...state, error: action.payload, loading: false, isAuthenticated: false };
    case 'LOGOUT':
      return { ...state, user: null, token: null, isAuthenticated: false };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (state.token) {
      apiService.setToken(state.token);
      checkAuth();
    }
  }, []);

  const login = async (email: string, password: string) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const response = await apiService.login(email, password);
      if (response.success && response.token) {
        apiService.setToken(response.token);
        localStorage.setItem('conerstone_token', response.token);
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { user: response.user, token: response.token },
        });
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: response.message || 'Login failed' });
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: 'Login failed. Please try again.' });
    }
  };

  const register = async (userData: {
    student_id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role?: Role;
  }) => {
    dispatch({ type: 'REGISTER_START' });
    try {
      const response = await apiService.register(userData);
      if (response.success && response.token) {
        apiService.setToken(response.token);
        localStorage.setItem('conerstone_token', response.token);
        dispatch({
          type: 'REGISTER_SUCCESS',
          payload: { user: response.user, token: response.token },
        });
      } else {
        dispatch({ type: 'REGISTER_FAILURE', payload: response.message || 'Registration failed' });
      }
    } catch (error) {
      dispatch({ type: 'REGISTER_FAILURE', payload: 'Registration failed. Please try again.' });
    }
  };

  const logout = () => {
    apiService.removeToken();
    localStorage.removeItem('conerstone_token');
    dispatch({ type: 'LOGOUT' });
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const checkAuth = async () => {
    if (!state.token) return;
    
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await apiService.getCurrentUser();
      if (response.success) {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { user: response.user, token: state.token! },
        });
      } else {
        logout();
      }
    } catch (error) {
      logout();
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const updateProfile = async (data: Partial<User>) => {
    try {
      // This would be implemented in the API service
      console.log('Profile update:', data);
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  const value: AuthContextType = {
    ...state,
    login,
    register,
    logout,
    clearError,
    checkAuth,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};