import React from "react";
import Resume from "../../documents/resume_poloczek_philip.pdf";
import File from "../Terminal/File";
import List from "../Terminal/List";
import SoftLink from "../Terminal/SoftLink";

const Documents = () => {
  return (
    <List name={"Documents"}>
      <File name={"resume_poloczek.pdf"} url={Resume} />
      <SoftLink
        title={"client_work"}
        url={
          "https://peetzweg.notion.site/peetzweg/Client-Work-504f7a0b831841f7b71c50bbe8b6f368"
        }
      />
    </List>
  );
};

export default Documents;
