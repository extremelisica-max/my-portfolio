export interface SiteOwner {
  name: string;
  nameShort: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  behance: string;
  whatsapp: string;
  yearsOfExp: number;
  openToWork: boolean;
}

export const owner: SiteOwner = {
  name: "Александр Карсунцев",
  nameShort: "Карсунцев",
  role: "Product Designer",
  tagline: "B2B SaaS · CRM · Строительные платформы",
  location: "Самара · Удалённо",
  email: "extremelisica@gmail.com",
  phone: "+7 (939) 706-66-63",
  behance: "https://behance.net/extremelis4b1e",
  whatsapp: "https://wa.me/79397066663",
  yearsOfExp: 5,
  openToWork: true,
};
