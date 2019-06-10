import { Colors } from "./Colors";

const PrimaryFont = "Roboto Mono";
const SecondaryFont = "Roboto Mono";

export const Typography = {
  input: {
    fontFamily: PrimaryFont,
    color: Colors.primary,
    fontSize: 30,
    fontWeight: "800"
  },
  body: {
    fontFamily: SecondaryFont,
    color: Colors.primary,
    fontSize: 24,
    fontWeight: "800"
  },
  info: {
    fontSize: 16,
    fontFamily: SecondaryFont,
    color: Colors.secondary
  },
  button: {
    fontSize: 16,
    fontWeight: "800",
    fontFamily: SecondaryFont,
    color: Colors.primary
  },
  link: {
    fontSize: 16,
    fontWeight: "800",
    fontFamily: SecondaryFont,
    color: Colors.secondary,
    textDecorationLine: "underline"
  }
};
