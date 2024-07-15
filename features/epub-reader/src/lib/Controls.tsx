import { motion } from 'framer-motion';
import { useStore } from './store';

export function Controls() {
  const toggle = useStore((state) => state.toggle);
  const isPlaying = useStore((state) => state.isPlaying);

  return (
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
        <svg
          viewBox="0 0 10 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-current text-white"
        >
          <path d="M1.03906 12.7266H2.82031C3.5 12.7266 3.85938 12.3672 3.85938 11.6797V1.03906C3.85938 0.328125 3.5 0 2.82031 0H1.03906C0.359375 0 0 0.359375 0 1.03906V11.6797C0 12.3672 0.359375 12.7266 1.03906 12.7266ZM6.71875 12.7266H8.49219C9.17969 12.7266 9.53125 12.3672 9.53125 11.6797V1.03906C9.53125 0.328125 9.17969 0 8.49219 0H6.71875C6.03125 0 5.67188 0.359375 5.67188 1.03906V11.6797C5.67188 12.3672 6.03125 12.7266 6.71875 12.7266Z"></path>
        </svg>
      ) : (
        <svg
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-current text-white"
        >
          <path d="M0.9375 13.2422C1.25 13.2422 1.51562 13.1172 1.82812 12.9375L10.9375 7.67188C11.5859 7.28906 11.8125 7.03906 11.8125 6.625C11.8125 6.21094 11.5859 5.96094 10.9375 5.58594L1.82812 0.3125C1.51562 0.132812 1.25 0.015625 0.9375 0.015625C0.359375 0.015625 0 0.453125 0 1.13281V12.1172C0 12.7969 0.359375 13.2422 0.9375 13.2422Z"></path>
        </svg>
      )}
    </motion.div>
  );
}
