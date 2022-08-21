import React from "react";
import { ReactTable } from "../Common/Table/Table";
import { createColumnHelper } from "@tanstack/react-table";

type ApplicationsTableProps = {};

type Application = {
  id: string;
  submittedBy: string;
  subDate: Date;
  bioDate: Date;
};

const columnHelper = createColumnHelper<Application>();

const columns = [
  columnHelper.accessor("id", {
    header: () => "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("submittedBy", {
    header: () => "Submitted By",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("subDate", {
    header: () => "Submitted Date",
    cell: (info) => info.getValue().toDateString(),
  }),
  columnHelper.accessor("bioDate", {
    header: () => "Bio Date",
    cell: (info) => info.getValue().toDateString(),
  }),
];

const data: Application[] = [
  {
    id: "1",
    submittedBy: "lorem",
    subDate: new Date(),
    bioDate: new Date(),
  },
  {
    id: "1",
    submittedBy: "lorem",
    subDate: new Date(),
    bioDate: new Date(),
  },
];

const ApplicationsTable: React.FC<ApplicationsTableProps> = () => {
  return (
    <>
      <ReactTable data={data} columns={columns} />
    </>
  );
};

export { ApplicationsTable };
