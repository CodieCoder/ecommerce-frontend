"use client";

import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ButtonRolesEnum, CustomButton } from "@/components/buttons";
import { Payment } from "../../types";

// id: string;
// category: string;
// title: string;
// description: string;
// popularity: number;
// status: "draft" | "published" | "archived" | "suspended" | "rejected";
// createdAt: string;
// updatedAt: string;

interface IColumns extends Payment {
  action: any;
}

const columns = () => {
  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "Popularity",
      header: "Popularity",
    },
    {
      accessorKey: "Status",
      header: "Status",
    },
    {
      accessorKey: "createdAt",
      header: "Created",
    },
    {
      accessorKey: "updatedAt",
      header: "Updated",
    },
    {
      id: "actions",
      header: "Action",
      cell: ({ row }: { row: any }) => {
        return (
          <div className="flex space-x-2">
            <CustomButton
              label=""
              role={ButtonRolesEnum.delete}
              size={"icon"}
            />
            <CustomButton label="" role={ButtonRolesEnum.edit} size={"icon"} />
          </div>
        );
      },
    },
  ];

  return columns;
};
export default columns;
