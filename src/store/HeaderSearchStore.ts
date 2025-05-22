import { create } from "zustand";
import { supabase } from "@/lib/supabaseClient";

interface Result {
  cpuName: string;
  id: number;
}

interface HeaderSearchState {
  query: string;
  setQuery: (value: string) => void;
  results: Result[];
  fetchByQuery: () => Promise<void>;
}

const useHeaderSearchStore = create<
  HeaderSearchState & { fetchByQuery: () => Promise<void> }
>((set, get) => ({
  query: "",
  results: [],
  setQuery: (value) => {
    set({ query: value });
    if (value.length > 1) {
      get().fetchByQuery();
    } else {
      set({ results: [] });
    }
  },
  fetchByQuery: async () => {
    const searchTerm = get().query;

    const { data, error } = await supabase
      .from("cpu")
      .select("cpuName, id")
      .ilike("cpuName", `%${searchTerm}%`);

    if (error) {
      console.error(error, "supabase error: error in header input query");
    }

    console.log(data);
    set({ results: data || [] });
  },
}));

export default useHeaderSearchStore;
