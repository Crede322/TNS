import TableWrapperServer from "@/components/tables/TableWrapperServer";

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "";

  return (
    <main className="bg-[var(--color-lightgray)] ">
      <div className="container-main">
        <h1 className="tw-heading">Результаты по запросу: {query}</h1>
        <TableWrapperServer query={query} />
      </div>
    </main>
  );
}
