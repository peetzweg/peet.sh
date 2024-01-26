export interface FeatureProps {}
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Dict from '../data/dict.json';

interface DictionaryEntry {
  phonetics: Array<{
    audio?: string;
  }>;

  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{
      definition: string;
      example?: string;
    }>;
  }>;
}

interface Translation {
  text: string;
}

type Entries = Array<
  [
    string,
    {
      translation: Translation;
      dictionary: Array<DictionaryEntry>;
    },
  ]
>;

const shuffleArray = <T,>(array: Array<T>) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export function Feature(props: FeatureProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const audio = useRef<HTMLAudioElement>(null);

  const entries: Entries = useMemo(() => {
    const values = Object.entries(Dict);
    shuffleArray(values);
    // values.sort((a, b) => a[0].localeCompare(b[0]));
    return values;
  }, []);

  const playAudio = useCallback(() => {
    if (audio.current) {
      audio.current.play();
    }
  }, [audio]);

  const nextWord = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevWord = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyPresses = (e: KeyboardEvent) => {
      e.code === 'ArrowRight' && nextWord();
      e.code === 'ArrowLeft' && prevWord();
      e.code === 'ShiftRight' && playAudio();
    };

    window.addEventListener('keyup', handleKeyPresses);
    return () => window.removeEventListener('keyup', handleKeyPresses);
  }, [nextWord, prevWord, playAudio]);

  if (currentIndex >= entries.length) {
    return null;
  }

  const [word, { dictionary, translation }] = entries[currentIndex];
  const meanings = dictionary.map((entry) => entry.meanings).flat();

  const phonetics = dictionary
    .map((entry) => entry.phonetics)
    .flat()
    .map((phonetic) => phonetic.audio)
    .flat()
    .filter(Boolean);

  return (
    <div className="v-screen h-screen flex justify-center items-center p-8">
      <div className="flex flex-col h-96 items-start gap-12 lg:w-1/2 w-full">
        <div>
          <h1 className="text-5xl lg:text-6xl self-center">{word}</h1>
        </div>
        <div>
          <div className="gap-y-2 flex flex-col">
            <div>
              <div className="font-bold text-sm opacity-30">german</div>
              <div>{translation.text}</div>
            </div>
            {meanings.map((meaning, index) => (
              <div key={'meaning' + index}>
                <div className="font-bold text-sm opacity-30">
                  {meaning.partOfSpeech}
                </div>
                <div>{meaning.definitions[0].definition}</div>
              </div>
            ))}
          </div>
        </div>

        {phonetics.length > 0 && (
          <audio ref={audio} className="hidden" src={phonetics[0]} controls />
        )}

        <div className="flex flex-row gap-x-4 items-center absolute bottom-12">
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-3 items-center">
              <div className="w-8 h-8 border flex flex-row items-center justify-center">
                <code>←</code>
              </div>
              previous
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="w-8 h-8 border flex flex-row items-center justify-center">
                <code>→</code>
              </div>
              next
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="w-20 h-8 border flex flex-row items-center justify-center">
                <code>Shift</code>
              </div>
              audio
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
