import { Button } from '@mui/material'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { IPosts } from 'interfaces'

export function getTableColumns(onCellClick: (postsId: number) => void): GridColDef[] {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'userId', headerName: 'User ID', width: 100 },
    { field: 'title', headerName: 'Title', flex: 1 },
    {
      field: 'body',
      headerName: 'Description',
      flex: 1
    },
    {
      field: 'details',
      headerName: '',
      width: 100,
      renderCell: (params: GridRenderCellParams<IPosts>) => {
        return (
          <Button variant="contained" onClick={() => onCellClick(params?.row?.id)}>
            DETAILS
          </Button>
        )
      }
    }
  ]
  return columns
}
