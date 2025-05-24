import { supabase } from "@/lib/supabaseClient";
import { QueryResultType } from "@/types/queryResult";
import Table from "./Table";

interface TableProps {
  query: string;
  page: number;
}

export default async function TableWrapperServer({ query, page }: TableProps) {
  const limit = 10;
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const response = await supabase
    .from("cpu")
    .select(
      "cpuName, id, img, price, socket, coresNumber, frequency, cacheL2, cacheL3"
    )
    .ilike("cpuName", `%${query}%`)
    .range(from, to);

  const data = response.data as QueryResultType[];
  const error = response.error;
  console.log(data);
  return (
    <div className="table w-full mb-[20px]">
      <Table results={data} />
    </div>
  );
}
