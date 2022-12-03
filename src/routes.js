import {
  Billing,
  BookingList,
  Dashboard,
  GuestList,
  Import,
  Menu,
  Ordering,
  RoomList,
  Table,
  Login,
  ForgotPassword,
} from "./pages";
import bell from "./assets/bell.png";
import chair from "./assets/chair.png";
import menu from "./assets/menu.png";
import bed from "./assets/bed.png";
import booking from "./assets/booking.png";
import guest from "./assets/guests.png";
import _import from "./assets/import.png";
import bill from "./assets/bill.png";
import dashboard from "./assets/dashboard.png";

const routes = [
    {
        path: "/",
        page: Dashboard,
        icon: dashboard,
        name: "Dashboard",
    },
    {
        path: "/billing",
        page: Billing,
        icon: bill,
        name: "Bills"
    },
    {
        path: "/bookinglist",
        page: BookingList,
        icon: booking,
        name: "Booking List"
        
    },
    {
        path: "/rooms",
        page: RoomList,
        icon: bed,
        name: "Rooms"
    },
    {
        path: "/guests",
        page: GuestList,
        icon: guest,
        name: "Guests"
    },
    {
        path: "/import",
        page: Import,
        icon: _import,
        name: "Import",
    },
    {
        path: "/menu",
        page: Menu,
        icon: menu,
        name: "Food"
    },
    {
        path: "/ordering",
        page: Ordering,
        icon: bell,
        name: "Orders"
    },
    {
        path: "/tables",
        page: Table,
        icon: chair,
        name: "Tables"
    }
];
const hiddenRoutes = [
  {
    path: "/login",
    page: Login,
  },
  {
    path: "/forgotPassword",
    page: ForgotPassword,
  },
];
export { routes, hiddenRoutes };
