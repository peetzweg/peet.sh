import { Colors } from "./Colors";

const PrimaryFont = "Playfair Display";
const SecondaryFont = "Playfair Display";

const BaseFontSize = 16;
export const Typography = {
  heading: {
    fontFamily: PrimaryFont,
    color: Colors.primary,
    fontWeight: "200",
    fontSize: "160px",
    margin: "60px",
  },
  headingMobile: {
    fontFamily: PrimaryFont,
    color: Colors.primary,
    fontWeight: "200",
    fontSize: "90px",
  },
  title: {
    fontFamily: PrimaryFont,
    color: Colors.primary,
    fontWeight: "900",
    fontSize: "40px",
  },
  description: {
    fontFamily: SecondaryFont,
    color: Colors.primary,
    fontSize: BaseFontSize,
    fontWeight: "400",
  },
};
