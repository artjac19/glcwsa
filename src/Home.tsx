import { useEffect, useRef, useState } from 'react';
import FooterNav from './FooterNav';

// Placeholder front-page photo — drop a Great Lakes photo into public/ and change this filename.
const HERO_IMAGE = 'teammidwest.webp';

function Home() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [aspect, setAspect] = useState(() => window.innerWidth / window.innerHeight);
  const [speed, setSpeed] = useState(() => {
    const aspect = window.innerWidth / window.innerHeight;
    return aspect <= 4 / 3 ? 0 : 0.75;
  });

  useEffect(() => {
    const updateAspectAndSpeed = () => {
      const aspect = window.innerWidth / window.innerHeight;
      setAspect(aspect);
      setSpeed(aspect <= 4 / 3 ? 0 : 0.75);
    };
    window.addEventListener('resize', updateAspectAndSpeed);
    updateAspectAndSpeed();
    return () => window.removeEventListener('resize', updateAspectAndSpeed);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${-window.scrollY * speed}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <>
    <div className="flex flex-col w-full">
      {/* Show parallax div only if aspect > 4/3 */}
      {aspect > 4/3 && (
        <div className="w-full h-[100vh] overflow-hidden relative mt-[80px]">
          <div
            ref={imageRef}
            className="w-full absolute top-0 left-0 h-[120%] z-0"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}${HERO_IMAGE})`,
              backgroundSize: '100%',
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat',
              willChange: 'transform'
            }}
          />
        </div>
      )}
      {/* Show static image if aspect <= 4/3 */}
      {aspect <= 4/3 && (
        <img
          src={`${import.meta.env.BASE_URL}${HERO_IMAGE}`}
          alt="Great Lakes Collegiate Water Ski"
          className="mt-[80px] mb-0 w-full h-auto"
        />
      )}

      <div
        className="w-full bg-white px-6 py-8 z-10 rounded-t-3xl"
        style={{
          marginTop: aspect <= 4/3 ? '0' : '-30vh',
          left: aspect <= 4/3 ? 0 : undefined,
          right: aspect <= 4/3 ? 0 : undefined
        }}
      >
        <div id="news" className="mb-8"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">News</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-10 max-w-2xl mx-auto mb-10 text-center shadow-sm">
            <p className="text-gray-500 text-lg m-0">No news yet — check back soon!</p>
          </div>
        <div id="tourney-section" className="mb-8"></div>
        <h2 className="mt-20 text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-8 text-center">2025 TOURNEY SCHEDULE</h2>
        <div className="max-w-4xl mx-auto w-full sm:w-full md:w-4/5 lg:w-3/4 xl:w-2/3">

        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 font-['Montserrat']">Great Lakes</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-brand text-white">
                  <th>DATES</th>
                  <th>NAME</th>
                  <th>LOCATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tournament-date">Sep 6-7</td>
                  <td className="tournament-name">Allentucky Waterbowl</td>
                  <td>Conklin, MI</td>
                </tr>
                <tr>
                  <td className="tournament-date">Sep 6-7</td>
                  <td className="tournament-name">Southern Ohio Challenge</td>
                  <td>Harrison, OH</td>
                </tr>
                <tr>
                  <td className="tournament-date">Sep 13-14</td>
                  <td className="tournament-name">Great Lakes Fling</td>
                  <td>Van Wert, OH</td>
                </tr>
                <tr>
                  <td className="tournament-date">Sep 13-14</td>
                  <td className="tournament-name">Spartan Ripfest</td>
                  <td>South Haven, MI</td>
                </tr>
                <tr>
                  <td className="tournament-date">Sep 20-21</td>
                  <td className="tournament-name">Great Lakes Conference Championship</td>
                  <td>Van Wert, OH</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-semibold md:mb-4 font-['Montserrat']">Championships</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-brand text-white">
                  <th>DATES</th>
                  <th>NAME</th>
                  <th>LOCATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tournament-date">Sep 26-28</td>
                  <td className="tournament-name">2025 Collegiate Regionals</td>
                  <td>PITS - Decatur, IL</td>
                </tr>
                <tr>
                  <td className="tournament-date">October 16-18</td>
                  <td className="tournament-name">2025 Collegiate Nationals</td>
                  <td>Imperial Lakes - Imperial, CA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div> {/* Close the max-width container div */}
      </div>
    </div>
  <FooterNav
    links={[
      { label: 'News', id: 'news' },
      { label: 'Tourney', id: 'tourney-section' }
    ]}
  />
  </>
  );
}

export default Home;
