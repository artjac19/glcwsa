import FooterNav from './FooterNav';

// Front-page collage — drop a photo into public/ and change this filename.
const HERO_IMAGE = 'glr-cover.jpg';

function Home() {
  return (
    <>
    <div className="flex flex-col w-full">
      <div className="w-full mt-[80px]">
        <img
          src={`${import.meta.env.BASE_URL}${HERO_IMAGE}`}
          alt="Great Lakes Collegiate Water Ski"
          className="w-full h-auto block"
        />
      </div>

      <div className="w-full bg-white px-6 py-8 z-10 rounded-t-3xl">

        {/* News section temporarily hidden — change `false` to `true` to restore */}
        {false && (
        <>
        <div id="news" className="mb-8"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">News</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-10 max-w-2xl mx-auto mb-10 text-center shadow-sm">
            <p className="text-gray-500 text-lg m-0">No news yet — check back soon!</p>
          </div>
        </>
        )}
        <div id="tourney-section" className="mb-8"></div>
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-8 text-center">2026 TOURNEY SCHEDULE</h2>
        <div className="max-w-4xl mx-auto w-full sm:w-full md:w-4/5 lg:w-3/4 xl:w-2/3">

        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 font-['Montserrat']">Great Lakes Region</h3>
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
                  <td className="tournament-date">Sep 12-13</td>
                  <td className="tournament-name">Allentucky Waterbowl</td>
                  <td>Conklin, MI</td>
                </tr>
                <tr>
                  <td className="tournament-date">Sep 12-13</td>
                  <td className="tournament-name">Southern Ohio Challenge</td>
                  <td>Harrison, OH</td>
                </tr>
                <tr>
                  <td className="tournament-date">Sep 19-20</td>
                  <td className="tournament-name">Great Lakes Fling</td>
                  <td>Van Wert, OH</td>
                </tr>
                <tr>
                  <td className="tournament-date">Sep 19-20</td>
                  <td className="tournament-name">Spartan Ripfest</td>
                  <td>South Haven, MI</td>
                </tr>
                <tr>
                  <td className="tournament-date">Sep 26-27</td>
                  <td className="tournament-name">Great Lakes Classic</td>
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
                  <td className="tournament-date">Oct 2-4</td>
                  <td className="tournament-name">2026 Great Lakes Regionals</td>
                  <td>PITS - Decatur, IL</td>
                </tr>
                <tr>
                  <td className="tournament-date">October 15-17</td>
                  <td className="tournament-name">2026 Collegiate Nationals</td>
                  <td>Imperial Lakes - Bel Acqua, CA</td>
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
      { label: 'Tourney', id: 'tourney-section' }
    ]}
  />
  </>
  );
}

export default Home;
