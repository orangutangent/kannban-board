import useCards, { ICard } from "@/features/useCards";
import { IColumn } from "@/features/useColumns";
import { useEffect } from "react";
import Card1 from "../shared/UI/card";

export default function Column({ title, color }: IColumn) {
  useEffect(() => {
    fetchCards();
  }, []);

  const CardMap = (data: ICard, index: number) => {
    return data.status === title ? <Card1 color={color} {...data}   key={index} /> : <></>;
  };
  const { cards, fetchCards } = useCards();
  return (
    <li className="list-none w-[256px] bg-none">
      <h2 className="text-2xl font-bold mb-[12px]">{title}</h2>
      <ul className="bg-[#EBEBFF] border-[#D6D8DB] border p-[24px] rounded flex flex-col gap-[24px]">
        {cards.map(CardMap)}
      </ul>
    </li>
  );
}
