// hooks/auth.js

import { useEffect, useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  let token;

  if (typeof window !== 'undefined') {
    token = window.localStorage.getItem("token");
  }

  useEffect(() => {
    // Lakukan pengecekan otentikasi di sini
    // Contoh sederhana: cek apakah ada token di localStorage

    if (token) {
      // Jika ada token, tandai pengguna sebagai terotentikasi
      setUser({ username: "Thoriq" }); // Ganti ini dengan data pengguna yang sesuai
    }

    setLoading(false);
  }, [token]);

  return { user, loading };
}
