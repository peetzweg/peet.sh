import { useRef } from 'react';
import { Navigation } from './Navigation';
import { Reader } from './Reader';
import { useStore } from './store';

export function EpubReader() {
  const content = useStore((state) => state.content);

  return (
    <div className="flex flex-col pt-10 items-center w-screen min-h-screen ">
      <Navigation />

      {content && <Reader text={content} />}
    </div>
  );
}
