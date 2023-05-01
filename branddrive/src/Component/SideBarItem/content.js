import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CompareArrowsOutlinedIcon from "@material-ui/icons/CompareArrowsOutlined";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import LinkOutlinedIcon from "@material-ui/icons/LinkOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import ExplicitOutlinedIcon from "@material-ui/icons/ExplicitOutlined";

export const content = [
  [
    { type: "header", text: "" },

    {
      type: "link",
      text: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      type: "link",
      text: "Customer",
      icon: <PeopleAltOutlinedIcon />,
    },
    {
      type: "link",
      text: "Wallets & Cards",
      icon: <AccountBalanceWalletOutlinedIcon />,
    },
    {
      type: "link",
      text: "Online Shop",
      icon: <ShoppingCartOutlinedIcon />,
    },
  ],
  [
    { type: "header", text: "BUSINESS & SALES" },

    {
      type: "link",
      text: "Order",
      icon: <NoteOutlinedIcon />,
    },
    {
      type: "link",
      text: "Invoicing",
      icon: <DescriptionOutlinedIcon />,
    },
    {
      type: "link",
      text: "Point of Sale",
      icon: <CompareArrowsOutlinedIcon />,
    },
    {
      type: "link",
      text: "Product & Sale",
      icon: <LoyaltyOutlinedIcon />,
    },
  ],
  [
    { type: "header", text: "INSIGHT & GROWTH" },

    {
      type: "link",
      text: "Analytics",
      icon: <EqualizerOutlinedIcon />,
    },
    {
      type: "link",
      text: "Acounting",
      icon: <AssignmentOutlinedIcon />,
    },
    {
      type: "link",
      text: "Business Loan",
      icon: <MonetizationOnOutlinedIcon />,
    },
  ],
  [
    { type: "header", text: "MORE" },

    {
      type: "link",
      text: "Payment Pages",
      icon: <LinkOutlinedIcon />,
    },
    {
      type: "link",
      text: "Bills & Utilities",
      icon: <PhoneAndroidOutlinedIcon />,
    },
    {
      type: "link",
      text: "Expenses",
      icon: <ExplicitOutlinedIcon />,
    },
  ],
];
