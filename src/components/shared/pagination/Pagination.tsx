interface PaginationProps {
  page: number;
}

export default function Pagination({ page }: PaginationProps) {
  return (
    <div>
      <h1>{page}</h1>
      <div></div>
    </div>
  );
}
