import {
  AudioWaveform,
  Bell,
  Command,
  GalleryVerticalEnd,
  HelpCircle,
  LayoutDashboard,
  ListTodo,
  Megaphone,
  MessageCircle,
  MonitorCheck,
  Package,
  Palette,
  PhoneIncoming,
  Settings,
  UserCog,
  Users,
  Wrench,
} from "lucide-react";

export const sidebarData = {
  // teams: [
  //   {
  //     name: "Shadcn Admin",
  //     logo: Command,
  //     plan: "Vite + ShadcnUI",
  //   },
  //   {
  //     name: "Acme Inc",
  //     logo: GalleryVerticalEnd,
  //     plan: "Enterprise",
  //   },
  //   {
  //     name: "Acme Corp.",
  //     logo: AudioWaveform,
  //     plan: "Startup",
  //   },
  // ],
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Consultations",
          url: "/dashboard/consultations",
          badge: "3",
          icon: PhoneIncoming,
        },
        {
          title: "Testimonials",
          url: "/dashboard/testimonials",
          icon: Megaphone,
        },
      ],
    },

    {
      title: "Other",
      items: [
        {
          title: "Settings",
          icon: Settings,
          items: [
            {
              title: "Profile",
              url: "/settings",
              icon: UserCog,
            },
            {
              title: "Account",
              url: "/settings/account",
              icon: Wrench,
            },
            {
              title: "Appearance",
              url: "/settings/appearance",
              icon: Palette,
            },
            {
              title: "Notifications",
              url: "/settings/notifications",
              icon: Bell,
            },
            {
              title: "Display",
              url: "/settings/display",
              icon: MonitorCheck,
            },
          ],
        },
        {
          title: "Help Center",
          url: "/help-center",
          icon: HelpCircle,
        },
      ],
    },
  ],
};
