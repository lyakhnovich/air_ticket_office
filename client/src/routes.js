import {ADMIN_ROUTE, BOOKING_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Admin from './pages/Admin'
import Booking from "./pages/Booking";
import Auth from "./pages/Auth";



export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  }
]

export const publicRoutes = [
  {
    path: BOOKING_ROUTE,
    Component: Booking
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  }

]