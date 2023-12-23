"use client";

import { DataTable } from "@/components/tables/tradeCard/table";
import Columns from "./components/_table/columns";
import { Payment } from "./types";
import { CustomButton } from "@/components/buttons";
import { BsPlusLg } from "react-icons/bs";
import { CardsPagesEnum } from "@/constants/cards/pages";
import Link from "next/link";

function getData(): Payment[] {
  return [
    {
      id: "728ed52f",
      category: "Instagram Business",
      title: "Visit my Instagram page Ad",
      description: "This is to alert all my followers on Instagram",
      popularity: 4,
      status: "published",
      createdAt: "02/04/2023",
      updatedAt: "19/04/2023",
    },
    {
      id: "09s33ed2",
      category: "FB",
      title: "FB",
      description: "Facebook followers ginger",
      popularity: 4,
      status: "published",
      createdAt: "23/03/2023",
      updatedAt: "19/04/2023",
    },
    {
      id: "728ed52f",
      category: "Instagram Business",
      title: "Visit my Instagram page Ad",
      description: "This is to alert all my followers on Instagram",
      popularity: 4,
      status: "published",
      createdAt: "02/04/2023",
      updatedAt: "19/04/2023",
    },
    {
      id: "728ed52f",
      category: "Instagram Business",
      title: "Visit my Instagram page Ad",
      description: "This is to alert all my followers on Instagram",
      popularity: 4,
      status: "published",
      createdAt: "02/04/2023",
      updatedAt: "19/04/2023",
    },
    {
      id: "728ed52f",
      category: "Instagram Business",
      title: "Instagram page Ad",
      description: "This is to alert all my followers on Instagram",
      popularity: 4,
      status: "published",
      createdAt: "02/04/2023",
      updatedAt: "19/04/2023",
    },
  ];
}

export default function Page() {
  const data = getData();
  const columns = Columns();
  const props = {};
  return (
    <div className="container mx-auto py-10">
      <div className="w-full text-right py-5">
        <Link href={CardsPagesEnum.Create}>
          <CustomButton
            label={<span> &nbsp;Create new card</span>}
            icon={<BsPlusLg />}
          />
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
