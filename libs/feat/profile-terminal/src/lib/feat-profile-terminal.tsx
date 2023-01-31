import Documents from './components/Section/Documents';
import Profiles from './components/Section/Profiles';
import Projects from './components/Section/Projects';
import Sketches from './components/Section/Sketches';
import Executable from './components/Terminal/Executable';
import InputPrompt from './components/Terminal/InputPrompt';
import Link from './components/Terminal/Link';
import Prompt from './components/Terminal/Prompt';
import { Terminal, TerminalContainer } from './styles';

export const TerminalComponent = () => (
  <TerminalContainer>
    <Terminal>
      <Prompt path={'~'} command={'cat'} args={'./README.md'} />
      # Hi 👋,
      <br />
      <br />
      I am Philip. I lived a lot of my life inside terminals. I enjoy writing
      clean code and learning about new technologies to solve hard problems.
      <br />
      <Link href="/hardware">As a hobby I build furniture.</Link>
      <br />
      <Prompt path={'~'} command={'ls'} args={'generative_art_sketches'} />
      <Sketches />
      <br />
      <Prompt path={'~'} command={'ls'} args={'documents/'} />
      <Documents />
      <br />
      <Prompt path={'~'} command={'ls'} args={'bin/'} />
      <Executable name={'mailMe'} url={'mailto:phil.czek@gmail.com'} />
      <br />
      <Prompt path={'~'} command={'ls'} args={'profiles/'} />
      <Profiles />
      <br />
      <Prompt path={'~'} command={'ls'} args={'-l projects/'} />
      <Projects />
      <br />
      <InputPrompt path={'~'} />
    </Terminal>
  </TerminalContainer>
);

export default TerminalComponent;
