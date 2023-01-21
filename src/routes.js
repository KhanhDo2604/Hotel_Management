import {
  BookingList,
  Dashboard,
  GuestList,
  Menu,
  Ordering,
  RoomList,
  Table,
  ForgotPassword,
  FormReservation,
  FoodChoosing,
  ProfileSetting,
  UserInformation,
  FormUpdate,
  FoodAdding,
  RestaurantReport,
  PlaceToBook,
  AddGuest,
  BookInAdvanced

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
    path: "/dashboard",
    page: Dashboard,
    icon: dashboard,
    name: "Dashboard",
    role: "a"
  },
  {
    path: "/bookinglist",
    page: BookingList,
    icon: booking,
    name: "Booking List",
    role: "h"
  },
  {
    path: "/rooms",
    page: RoomList,
    icon: bed,
    name: "Rooms",
    role: "a"
  },
  {
    path: "/guests",
    page: GuestList,
    icon: guest,
    name: "Guests",
    role: "h"
  },
  {
    path: "/menu",
    page: Menu,
    icon: menu,
    name: "Food",
    role: "r"
  },
  {
    path: "/ordering",
    page: Ordering,
    icon: bell,
    name: "Orders",
    role: "r"
  },
  {
    path: "/tables",
    page: Table,
    icon: chair,
    name: "Tables",
    role: "r"
  },
];
const hiddenRoutes = [
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
  },
  {
    path:'/addGuest',
    page:AddGuest
  },
  {
    path: '/bookInAdvanced',
    page: BookInAdvanced
  }
];

export { routes, hiddenRoutes };
