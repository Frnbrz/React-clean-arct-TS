import { Typography } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

interface Props {
  children: JSX.Element[] | JSX.Element
}
function RoutesWithNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route
        path='*'
        element={<Typography variant='h2'>Not Found</Typography>}
      />
    </Routes>
  )
}
export default RoutesWithNotFound
