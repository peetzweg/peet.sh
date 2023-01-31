import List from '../Terminal/List';
import SoftLink from '../Terminal/SoftLink';

const Documents = () => {
  return (
    <List name={'Documents'}>
      <SoftLink title={'client_work'} url={'/client-work'} />
      <SoftLink title={'software_side_projects'} url={'/software'} />
    </List>
  );
};

export default Documents;
