import { useCallback, useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import { Reader } from './Reader';
import { useStore } from './store';

export function EpubReader() {
  const content = useStore((state) => state.content);

  return (
    <div className="flex flex-col pt-10 items-center w-screen min-h-screen ">
      <BookPicker />
      <Navigation />

      {content && <Reader text={content} />}
    </div>
  );
}

const BookPicker = () => {
  const [opfs, setOpfs] = useState<FileSystemDirectoryHandle | undefined>(
    undefined,
  );

  useEffect(() => {
    navigator.storage.getDirectory().then((dir) => {
      console.log({ dir });
      dir.getFileHandle('');
      setOpfs(dir);
    });
  }, []);

  const selectFile = useCallback(() => {
    if (window.showOpenFilePicker) {
      window.showOpenFilePicker().then((handle: FileSystemFileHandle[]) => {
        console.log({ handle });
        handle[0].getFile().then((file) => {
          console.log({ file });
        });
        handle[0].requestPermission({ mode: 'read' }).then((perm) => {
          console.log({ newperm: perm });
        });
        handle[0].queryPermission().then((perm) => {
          console.log({ perm });
        });
      });
    } else {
      console.warn('window.showOpenFilePicker() not available');
    }
  }, []);

  return <button onClick={selectFile}>choose file</button>;
};
