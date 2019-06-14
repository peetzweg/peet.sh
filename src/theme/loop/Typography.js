import { Colors } from "./Colors";

const PrimaryFont = "Roboto Mono";
const SecondaryFont = "Roboto Mono";

const BaseFontSize = 16;
export const Typography = {
  input: {
    fontFamily: PrimaryFont,
    color: Colors.primary,
    fontSize: "2em",
    fontWeight: "800"
  },
  body: {
    fontFamily: SecondaryFont,
    color: Colors.primary,
    fontSize: BaseFontSize,
    fontWeight: "800"
  },
  info: {
    fontSize: "1em",
    fontFamily: SecondaryFont,
    color: Colors.secondary
  },
  button: {
    fontSize: "1em",
    fontWeight: "800",
    fontFamily: SecondaryFont,
    color: Colors.primary
  },
  link: {
    fontSize: "1em",
    fontWeight: "800",
    fontFamily: SecondaryFont,
    color: Colors.secondary,
    textDecorationLine: "underline"
  }
};
