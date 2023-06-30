import {Outlet} from '@solidjs/router'

export const MainLayout = () => {
  return (
    <div>
      main layout
      <Outlet />
    </div>
  )
}

export default MainLayout
