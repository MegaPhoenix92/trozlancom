import { jwtDecode } from 'jwt-decode';

// ...existing interface definitions...

interface User {
  id: string;
  email: string;
  name?: string;
}

interface JWTPayload {
  sub: string;
  email: string;
  name?: string;
  exp?: number;
  iat?: number;
}

interface AuthResponse {
  token: string;
  user: User;
}

export const verifyToken = (token: string): boolean => {
  try {
    return !!jwtDecode(token);
  } catch {
    return false;
  }
};

export const decodeToken = (token: string): User | null => {
  try {
    const decoded: JWTPayload = jwtDecode(token);
    return {
      id: decoded.sub,
      email: decoded.email,
      name: decoded.name
    };
  } catch {
    return null;
  }
};

export const refreshToken = async (token: string): Promise<string> => {
  try {
    const response = await fetch('/api/auth/refresh', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Token refresh failed');
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    throw new Error('Token refresh failed');
  }
};

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded: JWTPayload = jwtDecode(token);
    return decoded.exp ? decoded.exp < Date.now() / 1000 : true;
  } catch {
    return true;
  }
};

export const getAuthHeader = (): { Authorization: string } | {} => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};
