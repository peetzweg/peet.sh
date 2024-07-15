import ePub, { Book } from 'epubjs';
import { create } from 'zustand';

type Store = {
  isPlaying: boolean;
  progress: number;
  book: Book | undefined;
  cover: string | undefined;
  chapter: string | undefined;
  content: string | undefined;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  setProgress: (progress: number) => void;
  openBook: (file: File) => Promise<void>;
  closeBook: () => void;
  back: () => void;
  selectSection: (href: string) => Promise<void>;
};

const INITIAL_STATE = {
  isPlaying: false,
  book: undefined,
  cover: undefined,
  chapter: undefined,
  content: undefined,
  progress: 0,
};

export const useStore = create<Store>()((set, get) => ({
  ...INITIAL_STATE,
  play: () => set({ isPlaying: true }),
  pause: () => set({ isPlaying: false }),
  toggle: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setProgress: (progress: number) => set((state) => ({ progress })),
  openBook: async (file: File) => {
    const buffer = await file.arrayBuffer();
    const book = ePub(buffer);
    await book.opened;
    const url = await book.coverUrl();
    set({ book, cover: url || undefined });
  },
  back: () => {
    const chapter = get().chapter;
    if (chapter) {
      set((state) => ({
        ...INITIAL_STATE,
        book: state.book,
        cover: state.cover,
      }));
    } else {
      const book = get().book;
      if (book) {
        set({ ...INITIAL_STATE });
      }
    }
  },
  closeBook: () => {
    set({
      ...INITIAL_STATE,
    });
  },
  selectSection: async (href: string) => {
    const book = get().book;
    if (!book) throw Error('No Book opened');
    const navItem = book.navigation.toc.find((s) => s.href === href);
    const section = book.spine.get(href);
    const chapter = await book.load(section.href);

    if (!(chapter instanceof Document) || !chapter.body?.textContent) {
      throw `Unable to load chapter ${href}`;
    }

    set({
      chapter: navItem?.label || 'unknown',
      content: chapter.body.textContent.trim(),
    });
  },
}));
