import useSupabaseFetch from "../../../hooks/useSupabaseFetch";

interface Props {
  id: number;
}

export default function SliderSlideTemplate({ id }: Props) {
  const { product } = useSupabaseFetch(id);

  return <div>{product?.cpuName}</div>;
}
