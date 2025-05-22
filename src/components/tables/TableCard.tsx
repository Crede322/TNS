import { QueryResultType } from "@/types/queryResult";
import Image from "next/image";

interface ResultProps {
  result: QueryResultType;
}

export default function TableCard({ result }: ResultProps) {
  return (
    <li className="bg-white rounded-[12px] overflow-hidden flex flex-col items-start p-[12px] shadow-1">
      {result.img ? (
        <div className="flex items-center w-full justify-center">
          <div className="w-[150px] h-[150px] relative">
            <Image src={result.img} alt="product" fill />
          </div>
        </div>
      ) : (
        <div className="w-[100px] h-[100px] bg-gray-200 flex items-center justify-center text-xs text-gray-600">
          No Image
        </div>
      )}

      <div className="leading-tight pt-[10px]">
        <p>Процессор {result.cpuName}</p>
        <span>
          {result.socket},L3 - {result.cacheL3} МБ
        </span>
        <span>
          {result.coresNumber} x {result.frequency} ГГц,
        </span>
        <span>L2 - {result.cacheL2} МБ,</span>
        <span>L3 - {result.cacheL3} МБ</span>
      </div>
    </li>
  );
}
