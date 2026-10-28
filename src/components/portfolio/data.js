export const socialLinks = [
  {
    name: "GitHub",
    description: "Code & contributions",
    url: "https://github.com/khanarmughan71-dev",
    icon: "github",
    label: "CODE",
  },
  {
    name: "LinkedIn",
    description: "Professional profile",
    url: "https://www.linkedin.com/in/armughan-hassan-khan-075801321/",
    icon: "linkedin",
    label: "CONNECT",
  },
  {
    name: "Upwork",
    description: "Freelance development services",
    url: "https://www.upwork.com/freelancers/~01b8281dbd4a946a53",
    icon: "upwork",
    label: "FREELANCE",
  },
  {
    name: "Facebook",
    description: "Follow me on Facebook",
    url: "https://www.facebook.com/khanarmughan.git",
    icon: "facebook",
    label: "FOLLOW",
  },
  {
    name: "Instagram",
    description: "Follow my latest updates",
    url: "https://www.instagram.com/khanarmughan.git/",
    icon: "instagram",
    label: "FOLLOW",
  },
  {
    name: "Snapchat",
    description: "Add me on Snapchat",
    url: "https://www.snapchat.com/add/armughan_kha139",
    icon: "snapchat",
    label: "ADD",
  },
  {
    name: "WhatsApp",
    description: "Send me a message",
    url: "https://wa.me/923108072660",
    icon: "whatsapp",
    label: "MESSAGE",
  },
  {
    name: "Email",
    description: "khanarmughan71@gmail.com",
    url: "mailto:khanarmughan71@gmail.com",
    icon: "mail",
    label: "EMAIL",
  },
];

export const featuredSocialLinks = socialLinks.filter(({ name }) =>
  ["GitHub", "LinkedIn", "Instagram"].includes(name),
);

export const projects = [
  {
    number: "01",
    name: "Axiora Digital",
    type: "Digital agency",
    description:
      "A home for creative digital solutions, bringing a modern agency presence and its services together.",
    url: "https://axioradigitalagency.vercel.app/",
    previewImage: "/projects/axiora.webp",
    theme: "axiora",
    monogram: "A.",
    previewTitle: "Ideas into impact.",
    previewLine: "Digital experiences, made to move you.",
    tags: ["Agency", "Web experience"],
  },
  {
    number: "02",
    name: "Maymarmos Kitchen",
    type: "Restaurant website",
    description:
      "A restaurant website bringing its menu, story, and online ordering together.",
    url: "https://maymarmos.com/",
    previewImage: "/projects/maymarmos.webp",
    theme: "maymarmos",
    monogram: "M",
    previewTitle: "A Taste of Tradition & Fire",
    previewLine: "Fresh, bold, and unforgettable.",
    tags: ["Restaurant", "Online ordering"],
  },
  {
    number: "03",
    name: "Fleur-de-Lys Restaurant",
    type: "Restaurant consulting",
    description:
      "A restaurant growth consulting site focused on strategic guidance, operational excellence, and leadership training.",
    url: "https://fleur-de-lys-services.vercel.app/",
    previewImage: "/projects/fleur-de-lys.webp",
    theme: "fleur",
    monogram: "F",
    previewTitle: "Transforming Restaurants",
    previewLine: "Into high-performance businesses.",
    tags: ["Restaurant consulting", "Business growth"],
  },
];
