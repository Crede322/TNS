import { QueryResultType } from "@/types/queryResult";
import TableCard from "./TableCard";

// подходящие типы:

// id: number;
// cpuName: string;
// price: string;
// socket: string;
// coresNumber: number;
// frequency: number;
// cacheL2: number;
// cacheL3: number;

interface TableProps {
  results: QueryResultType[];
}

export default function Table({ results }: TableProps) {
  return (
    <div className="w-full ">
      <ul className="grid grid-cols-5 gap-[10px]  w-full">
        {results.map((item) => {
          return <TableCard result={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
}
