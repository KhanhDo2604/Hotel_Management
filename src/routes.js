import {
  BookingList,
  Dashboard,
  GuestList,
  Menu,
  Ordering,
  RoomList,
  Table,
  Login,
  ForgotPassword,
  FormReservation,
  FoodChoosing,
  ProfileSetting,
  UserInformation,
  FormUpdate,
  FoodAdding,
  RestaurantReport,
  PlaceToBook

} from "./pages";
import bell from "./assets/bell.png";
import chair from "./assets/chair.png";
import menu from "./assets/menu.png";
import bed from "./assets/bed.png";
import booking from "./assets/booking.png";
import guest from "./assets/guests.png";

import dashboard from "./assets/dashboard.png";

const routes = [
  {
    path: "/",
    page: Dashboard,
    icon: dashboard,
    name: "Dashboard",
  },
  {
    path: "/bookinglist",
    page: BookingList,
    icon: booking,
    name: "Booking List",
  },
  {
    path: "/rooms",
    page: RoomList,
    icon: bed,
    name: "Rooms",
  },
  {
    path: "/guests",
    page: GuestList,
    icon: guest,
    name: "Guests",
  },
  {
    path: "/menu",
    page: Menu,
    icon: menu,
    name: "Food",
  },
  {
    path: "/ordering",
    page: Ordering,
    icon: bell,
    name: "Orders",
  },
  {
    path: "/tables",
    page: Table,
    icon: chair,
    name: "Tables",
  },
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
  {

    path: "/formReservation",
    page: FormReservation,
  },
  {
    path:'/foodChoosing',
    page: FoodChoosing,
  },
  {
    path :"/profileSetting",
    page :ProfileSetting,
  },
  {
    path :"/userInformation",
    page : UserInformation,
  },
  {
    path:'/formUpdate',
    page: FormUpdate,
  },
  {
    path:'/foodAdding',
    page: FoodAdding,
  },
  {
    path:'/restaurantReport',
    page: RestaurantReport,
  },
  {
    path:'/placeToBook',
    page: PlaceToBook,
  }
];
export { routes, hiddenRoutes };
