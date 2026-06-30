export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Hire Me", href: "#hire" },
  { label: "Contact", href: "#contact" },
] as const;

export const footerNav = {
  Explore: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
  ],
  Connect: [
    { label: "Hire Me", href: "#hire" },
    { label: "Book a Project", href: "#booking" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "/blog" },
  ],
} as const;
