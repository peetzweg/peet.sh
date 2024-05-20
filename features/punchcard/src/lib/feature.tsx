import { clsx } from 'clsx';
import { Lochkarte } from 'lochkarte';

import Kindle from 'db/kindle';
export interface Props {}

export function Feature(props: Props) {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center w-full gap-10">
        {/* <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full p-4 md:p-0 md:w-3/4">
            <Calendar
              timestamps={timestamps}
              renderDay={(day, count) => (
                <div
                  className={clsx(
                    {
                      'text-gray-800': count === 0,
                    },
                    'h-[30px] w-[30px] text-2xl align-bottom relative flex justify-center items-center',
                  )}
                  title={day.toLocaleDateString()}
                >
                  {count > 0 ? 'x' : 'o'}
                </div>
              )}
            />
          </div>
        </div> */}

        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full p-4 md:p-0 md:w-3/4">
            <Lochkarte
              timestamps={Kindle}
              renderDay={(day, count) => (
                <div
                  className={clsx(
                    {
                      'text-gray-800': count === 0,
                    },
                    'h-[40px] text-2xl',
                  )}
                  title={day.toLocaleDateString()}
                >
                  {count > 0 ? 'x' : 'o'}
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
