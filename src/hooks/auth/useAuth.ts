import { useState } from "react";
import { supabase } from "../../helper/supabaseClient";

export function useAuth() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({ email, password });

    setLoading(false);

    if (error) {
      setError(error.message);
      return { success: false, message: error.message };
    }

    return {
      success: true,
      message: "Письмо с подтверждением отправлено на почту",
      data,
    };
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return { success: false, message: error.message };
    }

    return {
      success: true,
      message: "Письмо с подтверждением отправлено на почту",
      data,
    };
  };

  const signOut = async () => {
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signOut();

    setLoading(false);

    if (error) {
      setError(error.message);
      return { success: false, message: error.message };
    }

    return { success: true, message: "Вы вышли из аккаунта" };
  };

  return { signUp, signIn, signOut };
}
