import Pagination from "@/components/tables/Pagination";
import TableWrapperServer from "@/components/tables/TableWrapperServer";
import { supabase } from "@/lib/supabaseClient";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  const params = await searchParams;
  const query = params.q || "";
  const page = Number(params.page || "1");
  const limit = 10;

  let totalPages = 1;
  try {
    const { count, error } = await supabase
      .from("cpu")
      .select("id", { count: "exact", head: true }) // head: true - возвращает только заголовки, без данных
      .ilike("cpuName", `%${query}%`);
    totalPages = Math.ceil((count || 1) / limit);
    if (error) throw error;
  } catch (error) {
    console.log(error);
  }
  console.log(totalPages, "total pages");
  return (
    <main className="bg-[var(--color-lightgray)] ">
      <div className="container-main">
        <h1 className="tw-heading">Результаты по запросу: {query}</h1>
        <TableWrapperServer query={query} page={page} />
        <Pagination pages={totalPages} page={page} />
      </div>
    </main>
  );
}
