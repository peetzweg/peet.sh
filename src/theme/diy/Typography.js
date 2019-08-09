import { Colors } from "./Colors";

const PrimaryFont = "Playfair Display";
const SecondaryFont = "Playfair Display";

const BaseFontSize = 16;
export const Typography = {
  heading: {
    fontFamily: PrimaryFont,
    color: Colors.primary,
    fontWeight: "900",
    fontSize: "40px",
    margin: "40px"
  },
  title: {
    fontFamily: PrimaryFont,
    color: Colors.primary,
    fontWeight: "900",
    fontSize: "40px"
  },
  description: {
    fontFamily: SecondaryFont,
    color: Colors.primary,
    fontSize: BaseFontSize,
    fontWeight: "400"
  }
};
