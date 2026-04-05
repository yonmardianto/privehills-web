type NavLink = {
  label: string;
  href: string;
  onClick?: () => void;
  submenu?: {
    label: string;
    href: string;
    onClick?: () => void; // add this
  }[];
};
