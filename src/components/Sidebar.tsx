// Import Modules
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";

// Import Icons
import AspireLogo from "@/assets/icons/AspireLogo.svg?react";
import HomeIcon from "@/assets/icons/HomeIcon.svg?react";
import CardIcon from "@/assets/icons/CardIcon.svg?react";
import PaymentsIcon from "@/assets/icons/PaymentsIcon.svg?react";
import CreditIcon from "@/assets/icons/CreditIcon.svg?react";
import SettingsIcon from "@/assets/icons/SettingsIcon.svg?react";

const menuItems = [
  { label: "Home", icon: HomeIcon, href: "/" },
  { label: "Cards", icon: CardIcon, href: "/cards", active: true },
  { label: "Payments", icon: PaymentsIcon, href: "/payments" },
  { label: "Credit", icon: CreditIcon, href: "/credit" },
  { label: "Settings", icon: SettingsIcon, href: "/settings" },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="w-[50px] lg:w-[340px] bg-[#0C365A] flex flex-col transition-all duration-300 pt-12">
      <div className="w-65 flex-col gap-5 mb-20 mx-auto hidden lg:flex">
        <AspireLogo className="w-32 h-9 hidden lg:block" />
        <p className="text-sm text-white/30 leading-tight">
          Trusted way of banking for 3,000+ <br />
          SMEs and startups in Singapore
        </p>
      </div>

      <nav className="flex flex-col gap-15 w-10 lg:w-65 mx-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "flex items-center gap-4 text-base font-medium transition-colors justify-center lg:justify-start",
                isActive ? "text-green-500" : "text-white hover:text-green-300"
              )}
            >
              <Icon fill={isActive ? '#01d167' : '#ffffff'} className="w-6 h-6" />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;