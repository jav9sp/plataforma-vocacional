import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from "@tanstack/react-table";
import data from "../assets/MOCK_DATA.json";
import '../estilos/TablaDatos.css'
import { useState } from "react";


// * para hacer el componente reutilizable se deben pasar como props la data y columns

function TablaDatos() {
  const columns = [
    {
      header: "N°",
      accessorKey: "id",
    },
    {
      header: "Carrera",
      accessorKey: "carrera",
    },
    {
      header: "Institución",
      accessorKey: "institucion",
    },
    {
      header: "Tipo",
      accessorKey: "tipo",
    },
    {
      header: "Requisito",
      accessorKey: "requisitos",
    },
    {
      header: "Jornada",
      accessorKey: "jornada",
    },
    {
      header: "Puntaje de Corte",
      accessorKey: "puntajeCorte",
    },
  ];

  const [sorting, setSorting] = useState([])
  const [filtering, setFiltering] = useState('')

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

    <div className="contenedor-tabla">
      <div className="buscador-tabla">
        <label htmlFor="filtro-tabla">Buscar: </label>
        <input 
          id="filtro-tabla"
          placeholder="Escribe para filtrar..."
          type="text" 
          value={filtering} 
          onChange={e => setFiltering(e.target.value)}
        />
      </div>
    
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
                    <td>
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
        <button className="btn-paginacion" onClick={() => tabla.setPageIndex(0)}>
          {`<<`}
        </button>

        <button className="btn-paginacion" onClick={() => tabla.previousPage()}>
          {`<`}
        </button>

        <button className="btn-paginacion" onClick={() => tabla.nextPage()}>
          {`>`}
        </button>

        <button className="btn-paginacion" onClick={() => tabla.setPageIndex(tabla.getPageCount() - 1)}>
          {`>>`}
        </button>
      </div>

    </div>
  )
}

export default TablaDatos;
