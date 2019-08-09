import { createContext } from "react";

const defaultValue = {
  url: null,
  setUrl: () => {}
};

export default ContentContext = createContext(defaultValue);
