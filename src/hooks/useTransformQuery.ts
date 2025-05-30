import { useEffect, useState } from "react";

type QueryMapEntry = [string, [string, string | number | boolean]];

const queriesAssigned: QueryMapEntry[] = [
  ["2023 Год", ["year", 2023]],
  ["AM4", ["socket", "AM4"]],
  ["LGA 1700", ["socket", "LGA 1700"]],
  ["6 Ядер", ["coresNumber", 6]],
  ["8 Ядер", ["coresNumber", 8]],
  ["12 Потоков", ["threads", 12]],
  ["Свободный множитель", ["multiplier", true]],
  ["Частота RAM: 3200МГц", ["frequency", 3.2]],
  ["Встроенный видеочип", ["integratedGPU", true]],
  ["Amd", ["brand", "amd"]],
  ["Intel", ["brand", "intel"]],
];

const queriesMap = new Map<string, [string, string | number | boolean]>(
  queriesAssigned,
);

export function useTransformQuery(query: string, instance: string) {
  const [transformedQuery, setTransformedQuery] = useState<
    [string, string | number | boolean | null]
  >(["null", null]);

  useEffect(() => {
    console.log(query);
    const mappedQuery = queriesMap.get(query);

    if (mappedQuery) {
      setTransformedQuery(mappedQuery);
    } else {
      setTransformedQuery(["cpuName", ""]);
    }
  }, [query]);

  return { transformedQuery };
}
