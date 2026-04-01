export interface SiteOwner {
  name: string;
  nameShort: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  behance: string;
  telegram: string;
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
  telegram: "https://t.me/Karsun_a",
  yearsOfExp: 5,
  openToWork: true,
};
