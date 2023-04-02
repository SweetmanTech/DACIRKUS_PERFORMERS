import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid"
import { PageButton } from "../../../../shared/Button"

const Pagination = ({
  state,
  setPageSize,
  pageOptions,
  gotoPage,
  canNextPage,
  canPreviousPage,
  previousPage,
  nextPage,
  pageCount,
}) => (
  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <div className="flex gap-x-2">
      <span className="text-sm text-gray-700">
        Page <span className="font-medium">{state.pageIndex + 1}</span> of{" "}
        <span className="font-medium">{pageOptions.length}</span>
      </span>
      <label>
        <span className="sr-only">Items Per Page</span>
        <select
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={state.pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </label>
    </div>
    <div>
      <nav
        className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <PageButton
          className="rounded-l-md"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <span className="sr-only">First</span>
          <ChevronDoubleLeftIcon className="w-6 h-6" aria-hidden="true" />
        </PageButton>
        <PageButton onClick={() => previousPage()} disabled={!canPreviousPage}>
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="w-6 h-6" aria-hidden="true" />
        </PageButton>
        <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="w-6 h-6" aria-hidden="true" />
        </PageButton>
        <PageButton
          className="rounded-r-md"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <span className="sr-only">Last</span>
          <ChevronDoubleRightIcon className="w-5 h-5" aria-hidden="true" />
        </PageButton>
      </nav>
    </div>
  </div>
)

export default Pagination
