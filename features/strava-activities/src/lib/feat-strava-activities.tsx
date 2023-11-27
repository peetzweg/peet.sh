import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface Props {}

const ACTIVITIES = [
  '3675236976', // Nordsee Century
  '5496950656', // Ostsee
  '10239498330', // Berlin's Twin Peaks
  '9508161008', // Berkeley Fire Trails
  '7865006227', // Berlin Marathon 2022
  '1201296650', // Berlin Marathon 2017
  '8984880279', // Hermannslauf
  '1413716553', // Fastest Half
  '5267902208', // Wings for Life
  '2415066701', // Longest Ride
  // '2520719745', // Longest Climb Stelvio
];

export const FeatStravaActivities: React.FC<Props> = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://strava-embeds.com/embed.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-row items-center snap-x snap-mandatory overflow-scroll w-screen h-screen">
      <div className="min-w-[50vw] snap-center flex items-center justify-center"></div>
      {ACTIVITIES.map((id) => (
        <div
          key={id}
          className="min-w-[50vw] snap-center flex items-center justify-center"
        >
          <div
            className="strava-embed-placeholder"
            data-embed-type="activity"
            data-embed-id={id}
          />
        </div>
      ))}
    </div>
  );
};
