import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';
import { Reader } from './Reader';
import { useStore } from './store';
import { Progress } from './Progress';

export function Navigation() {
  const inputRef = useRef<HTMLInputElement>(null);

  const toggle = useStore((state) => state.toggle);
  const [openBook, back] = useStore((state) => [state.openBook, state.back]);

  const book = useStore((state) => state.book);
  const content = useStore((state) => state.content);
  const section = useStore((state) => state.chapter);
  const selectSection = useStore((state) => state.selectSection);
  const coverUrl = useStore((state) => state.cover);
  const isPlaying = useStore((state) => state.isPlaying);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          back();
          break;
        case ' ':
          toggle();
          break;
        default:
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files && e.target.files.length === 0) return;
    openBook(e.target.files![0]);
  }, []);

  return (
    <>
      <input
        type="file"
        accept=".epub"
        ref={inputRef}
        onChange={onChange}
        className="hidden"
      />
      <motion.div
        layout
        className="max-w-96 gap-4 bg-black flex flex-col cursor-pointer select-none overflow-hidden"
        variants={{
          closed: {
            borderRadius: '99px',
            transition: {
              duration: 0.1,
            },
          },
          open: {
            borderRadius: '32px',
            transition: {
              duration: 0.1,
            },
          },
        }}
        animate={book ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 1,
          when: 'afterChildren',
        }}
        whileHover={
          !book
            ? {
                scale: 1.03,
                transition: { duration: 0.1 },
              }
            : undefined
        }
        whileTap={!book ? { scale: 0.97 } : undefined}
      >
        <AnimatePresence mode="wait">
          <LayoutGroup>
            {book && (
              <motion.div
                layout="position"
                className="w-96 py-6 px-6 text-white gap-3 flex flex-col justify-start items-start"
                key={book.packaging.metadata.title}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-row gap-x-3">
                  <div className="w-12 overflow-hidden">
                    {coverUrl && <img className="w-12" src={coverUrl} />}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="">{book.packaging.metadata.title}</div>
                    <div className="opacity-30">
                      {book.packaging.metadata.creator}
                    </div>
                    {section && (
                      <motion.div
                        layout="size"
                        title={section}
                        className="text-ellipsis w-72 text-nowrap overflow-hidden"
                        key="section"
                        initial={{
                          opacity: 0,
                          filter: 'blur(10px)',
                          height: '0%',
                        }}
                        animate={{
                          opacity: 1,
                          filter: 'blur(0px)',
                          height: '100%',
                        }}
                        exit={{
                          opacity: 0,
                          filter: 'blur(10px)',
                          height: '0%',
                        }}
                      >
                        {`→ ${section}`}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {section && <Progress />}

            {section && (
              <motion.div
                layout
                key="controls"
                className="flex flex-row items-center justify-center pb-4"
                initial={{ opacity: 0, filter: 'blur(10px)', height: '0%' }}
                animate={{ opacity: 1, filter: 'blur(0px)', height: '100%' }}
                exit={{ opacity: 0, filter: 'blur(10px)', height: '0%' }}
                onMouseDown={toggle}
              >
                {isPlaying ? (
                  <div className="rotate-180">||</div>
                ) : (
                  <div className="rotate-180">⨞</div>
                )}
              </motion.div>
            )}

            {!book && (
              <motion.div
                layout
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                className="px-6 py-3"
                key="select-epub-file"
                transition={{ duration: 0.6 }}
                onClick={() => inputRef.current?.click()}
              >
                ↳ Select a Book
              </motion.div>
            )}
          </LayoutGroup>
        </AnimatePresence>
      </motion.div>

      {book && !section && (
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          className="px-4 w-96 py-4 text-ellipsis text-white gap-1 gap-x-3 flex flex-col justify-start  items-start overflow-hidden"
          key={'toc'}
        >
          {book.navigation.toc.map((t) => {
            return (
              <motion.div
                key={t.label}
                className="hover:opacity-100 opacity-45 cursor-pointer max-w-96 overflow-hidden text-ellipsis text-nowrap"
                onClick={() => selectSection(t.href)}
              >
                {t.label}
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </>
  );
}
