import React, { Children, Suspense } from 'react'
import {Navigate, Outlet, useRoutes} from "react-router-dom"
import DashboardLayout from '../pages/layouts/DashboardLayout'
import UserPage from '../pages/containers/User'
import TranPage from '../pages/containers/Tran'

export const Router = () => {

    let loginRoutes = [
      {path : '/', element: <Navigate to="/tran" replace />},
      {path : 'user', element: <UserPage/>},
      {path : 'tran', element: <TranPage/>},
    ]

    const _routes = [
      {
        element: (
          <DashboardLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </DashboardLayout>
        ),
        children: [
          ...loginRoutes
        ],
      },
    ]

    const routes = useRoutes(_routes);

    return routes
}
