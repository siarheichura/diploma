import logo1 from "./images/instaLogos/instaLogo1.svg";
import logo2 from "./images/instaLogos/instaLogo2.svg";
import logo3 from "./images/instaLogos/instaLogo3.svg";
import logo4 from "./images/instaLogos/instaLogo4.svg";
import logo5 from "./images/instaLogos/instaLogo5.svg";

export interface ILogo {
  id: number;
  logo: string;
}

export const instaLogos: ILogo[] = [
  { id: 1, logo: logo1 },
  { id: 2, logo: logo2 },
  { id: 3, logo: logo3 },
  { id: 4, logo: logo4 },
  { id: 5, logo: logo5 },
];
