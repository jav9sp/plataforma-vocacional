import { 
  useReactTable, 
  getCoreRowModel, 
  flexRender, 
  getPaginationRowModel, 
  getSortedRowModel, 
  getFilteredRowModel 
} from "@tanstack/react-table";

import { useState } from "react";


// * para hacer el componente reutilizable se deben pasar como props la data y columns

function TablaDatos({data, columns, filtering, setFiltering}) {

  const [sorting, setSorting] = useState([])

  const tabla = useReactTable({ 
    data, 
    columns, 
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering
  });

  return (

    <div className="contenedor">
    
        <div className="tabla-interna">
          <table>
            <thead>
              {
                tabla.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th 
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      >
                        {header.isPlaceholder ? null : (
                          <div>
                            {
                              flexRender(
                                header.column.columnDef.header, header.getContext()
                                )
                              }
                            {
                              {asc: "⬆️", desc: "⬇️"} [
                                header.column.getIsSorted() ?? null
                              ]
                            }
                          </div>
                        )}
                      </th>
                      ))
                    }
                  </tr>
                ))
              }
            </thead>

            <tbody>
              {
                tabla.getRowModel().rows.map(row => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              }
            </tbody>

          </table>
        </div>
        
        <div className="contenedor-botones">
          <button 
            title="Primera página" 
            className="btn-paginacion" 
            onClick={() => tabla.setPageIndex(0)}>
            {`<<`}
          </button>

          <button 
            title="Anterior"
            className="btn-paginacion" 
            onClick={() => tabla.previousPage()}>
            {`<`}
          </button>

          <button 
            title="Siguiente"
            className="btn-paginacion" 
            onClick={() => tabla.nextPage()}>
            {`>`}
          </button>

          <button 
            title="Última página"
            className="btn-paginacion" 
            onClick={() => tabla.setPageIndex(tabla.getPageCount() - 1)}>
            {`>>`}
          </button>
        </div>

    </div>
  )
}

export default TablaDatos;
