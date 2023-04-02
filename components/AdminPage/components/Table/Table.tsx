/* eslint-disable react/no-unstable-nested-components */
import { FC, forwardRef, useEffect, useRef } from "react"
import {
  useTable,
  useGlobalFilter,
  useFilters,
  useSortBy,
  usePagination,
  useRowSelect,
} from "react-table"
import { ACCEPTED_IMAGE_URIS } from "../../../../helpers/constants"
import GlobalFilter from "../GlobalFilter"
import Pagination from "../Pagination"
import TableBody from "../TableBody"
import TableHeader from "../TableHeader"

interface TableProps {
  columns: Array<{
    Header: string
    accessor: string
  }>
  data: Array<{
    walletAddress: string
    tokenId: string
    twitterHandle: string
    reason: string
    creatorType: string
    status: "Review" | "Accepted" | "Rejected"
  }>
  setAcceptedApplicants?: (acceptedApplicants: Array<string>) => void
}
const IndeterminateCheckbox = forwardRef<any, any>(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef()
  const resolvedRef: any = ref || defaultRef

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])

  return <input type="checkbox" ref={resolvedRef} {...rest} />
})

IndeterminateCheckbox.displayName = "IndeterminateCheckbox"
const Table: FC<TableProps> = ({ columns, data, setAcceptedApplicants }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    preGlobalFilteredRows,
    selectedFlatRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns1) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox
                {...getToggleAllRowsSelectedProps()}
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600"
              />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox
                {...row.getToggleRowSelectedProps()}
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600"
                checked={row.isSelected}
              />
            </div>
          ),
        },
        ...columns1,
      ])
    },
  )
  useEffect(() => {
    const filteredApplicants = selectedFlatRows.filter((row) => row.original.status === "Review")
    const acceptedApplicants = filteredApplicants.map((row) => ({
      tokenId: row.original.tokenId,
      imageUri: ACCEPTED_IMAGE_URIS[row.original.creatorType.toLowerCase()],
    }))
    setAcceptedApplicants(acceptedApplicants)
  }, [selectedFlatRows, setAcceptedApplicants])

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      {headerGroups.map((headerGroup) =>
        headerGroup.headers.map((column) =>
          column.Filter ? <div key={column.id}>{column.render("Filter")}</div> : null,
        ),
      )}
      <div className="flex flex-col mt-2">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg" />
            <table {...getTableProps()} border="1" className="min-w-full divide-y divide-gray-200">
              <TableHeader headerGroups={headerGroups} />
              <TableBody
                getTableBodyProps={getTableBodyProps}
                page={page}
                prepareRow={prepareRow}
              />
            </table>
          </div>
        </div>
      </div>
      <Pagination
        state={state}
        setPageSize={setPageSize}
        pageOptions={pageOptions}
        gotoPage={gotoPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        nextPage={nextPage}
        pageCount={pageCount}
      />
    </>
  )
}

export default Table
