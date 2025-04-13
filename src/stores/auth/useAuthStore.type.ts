interface AuthState {
  accessToken: string | null;
  expiresAt: number | null; // unix timestamp
  setTokens: (tokens: { accessToken: string; expiresIn: number }) => void;
  logout: () => void;
}

export type { AuthState };
