"use client"

import type { ColumnDef } from "@tanstack/react-table"
import type { LoanApplication } from "@/types/type"

export const columns: ColumnDef<LoanApplication>[] = [
  {
    accessorKey: "applicationNumber",
    header: "Application Number",
    cell: ({ row }) => row.original.applicationnumber,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => row.original.name,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => row.original.email,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => row.original.phone,
  },
  {
    accessorKey: "studentid",
    header: "Student ID",
    cell: ({ row }) => row.original.studentid,
  },
  {
    accessorKey: "course",
    header: "Course",
    cell: ({ row }) => row.original.course,
  },
  {
    accessorKey: "branch",
    header: "Branch",
    cell: ({ row }) => row.original.branch,
  },
  {
    accessorKey: "year",
    header: "Year",
    cell: ({ row }) => row.original.year,
  },
  {
    accessorKey: "cgpa",
    header: "CGPA",
    cell: ({ row }) => row.original.cgpa,
  },
  {
    accessorKey: "eamcetrank",
    header: "EAMCET Rank",
    cell: ({ row }) => row.original.eamcetrank,
  },
  {
    accessorKey: "university",
    header: "University",
    cell: ({ row }) => row.original.university,
  },

  {
    accessorKey: "loanamountrequired",
    header: "Loan Amount Required",
    cell: ({ row }) => row.original.loanamountrequired,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => row.original.status,
  },
]