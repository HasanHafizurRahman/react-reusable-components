/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";

interface ITableProps<T> {
  headers: string[];
  rows: T[];
}

const Table =<T,> ({ headers, rows }: ITableProps<T>) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          {headers.map((header, index) => (
            <th className="p-4" key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map(
              (
                cell:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined,
                cellIndex: React.Key | null | undefined
              ) => (
                <td className="p-4" key={cellIndex}>
                  {cell}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
