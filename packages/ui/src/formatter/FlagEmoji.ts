const countryToFlagEmoji: { [key: string]: string } = {
  USA: "πΊπΈ",
  Brazil: "π§π·",
  China: "π¨π³",
  France: "π«π·",
  "United Kingdom": "π¬π§",
  Turkey: "πΉπ·",
  Japan: "π―π΅",
  "South Korea": "π°π·",
  Peru: "π΅πͺ",
  "Costa Rica": "π¨π·",
  Australia: "π¦πΊ",
  Argentina: "π¦π·",
  Belgium: "π§πͺ",
  Canada: "π¨π¦",
  Colombia: "π¨π΄",
  "Czech Republic": "π¨πΏ",
  Germany: "π©πͺ",
  Poland: "π΅π±",
  "": "",
};

export const getFlagEmoji = (country: string): string => {
  return countryToFlagEmoji[country];
};
