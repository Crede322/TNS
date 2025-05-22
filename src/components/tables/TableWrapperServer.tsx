import { supabase } from "@/lib/supabaseClient";
import { QueryResultType } from "@/types/queryResult";
import Table from "./Table";

interface TableProps {
  query: string;
}

export default async function TableWrapperServer({ query }: TableProps) {
  const response = await supabase
    .from("cpu")
    .select(
      "cpuName, id, img, price, socket, coresNumber, frequency, cacheL2, cacheL3"
    )
    .ilike("cpuName", `%${query}%`);

  const data = response.data as QueryResultType[];
  const error = response.error;
  console.log(data);
  return (
    <div className="table w-full">
      <Table results={data} />
    </div>
  );
}
