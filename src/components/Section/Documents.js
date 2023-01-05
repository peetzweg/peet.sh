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
          "/client-work"
        }
      />
      <SoftLink
        title={"software_side_projects"}
        url={
          "/software"
        }
      />
    </List>
  );
};

export default Documents;
