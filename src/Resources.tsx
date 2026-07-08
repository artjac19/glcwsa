import FooterNav from "./FooterNav";

export default function Resources() {
  return (
    <>
      <FooterNav
        links={[
          { label: "Resources", id: "resources" },
          { label: "Records", id: "records" }
        ]}
      />
      <div id="resources" className="Resources mt-[80px] max-w-5xl mx-auto p-6">
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-4 text-center text-3xl">Places to Ski</h2>
        <div className="mx-auto text-gray-800 bg-white bg-opacity-90 rounded p-4 text-lg leading-relaxed mb-3">Amy and Christy are working on a program to match up collegiate skiers for the summer/post graduation with other AWSA people so y'all can continue to ski. Please out the form below if you need a spot to ski this summer!</div>
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfMVJbvG9nFKRA8-9etoV14JEpcsdSk1inrNd6DLKkD3nRCNg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand hover:bg-brand/85 text-white font-bold rounded shadow px-6 py-3 transition-colors text-lg"
          >
            Find A Ski Spot
          </a>
        </div>
      </section>

      <section className="mb-12">
        <img
          src={`${import.meta.env.BASE_URL}official.webp`}
          alt="Becoming an Official"
          className="mx-auto mb-6 rounded shadow max-w-5xl h-auto w-full"
        />
        <div className="max-w-none mx-auto text-gray-800 bg-white bg-opacity-90 rounded p-4 text-lg leading-relaxed">
  If you’re considering becoming an official the first thing you need to figure out is what kind of official you want to be. Since we are in the GLCWSA, you’re most likely looking at becoming an assistant judge, scorer, driver or safety official. This guide will hopefully help to explain the positions as well as how to get involved in them.<br /><br />
 <h3 className="text-xl font-bold mt-6 mb-2">Acheiving and maintaining Assistant Ratings</h3>
  <ul>
    <li>You need to work four tournaments every two years in order to maintain your rating.</li>
    <li>For more information, read: <a href="https://www.usawaterski.org/ncwsa/become-a-judge">USA Waterski’s Writeup on Becoming a Judge</a></li>
    <li>To see exactly what needs to be done to earn each rating, start by downloading the Official’s Applications below:</li>
  </ul>
  <br />
  <div className="mt-0 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <a
      href={`${import.meta.env.BASE_URL}AWSAAssistantJudgeApp.pdf`}
      target="_blank" rel="noopener noreferrer"
      className="flex items-center justify-center h-24 rounded-lg bg-brand shadow hover:bg-brand/85 transition-colors font-bold text-white text-center text-lg px-4"
      style={{ textDecoration: 'none' }}
    >
      AWSA Assistant Judge Application
    </a>
    <a
      href={`${import.meta.env.BASE_URL}AWSAAssistantScorerApp.pdf`}
      target="_blank" rel="noopener noreferrer"
      className="flex items-center justify-center h-24 rounded-lg bg-brand shadow hover:bg-brand/85 transition-colors font-bold text-white text-center text-lg px-4"
      style={{ textDecoration: 'none' }}
    >
      AWSA Assistant Scorer Application
    </a>
    <a
      href={`${import.meta.env.BASE_URL}AWSAAssistantDriverApp.pdf`}
      target="_blank" rel="noopener noreferrer"
      className="flex items-center justify-center h-24 rounded-lg bg-brand shadow hover:bg-brand/85 transition-colors font-bold text-white text-center text-lg px-4"
      style={{ textDecoration: 'none' }}
    >
      AWSA Assistant Driver Application
    </a>
    <a
      href={`${import.meta.env.BASE_URL}bylaws.pdf`}
      target="_blank" rel="noopener noreferrer"
      className="flex items-center justify-center h-24 rounded-lg bg-brand shadow hover:bg-brand/85 transition-colors font-bold text-white text-center text-lg px-4"
      style={{ textDecoration: 'none' }}
    >
      Conference Bylaws
    </a>
  </div>
  <h3 className="text-xl font-bold mt-6 mb-2">Assistant Judge</h3>
  <ul>
    <li>You can become an assistant judge in one or all of the three events in collegiate water skiing. Below is a breakdown of what judging each event looks like.</li>
    <li>A slalom judge is in charge of deciding how many buoys a skier went around and whether or not the skier went through the gates. They also have an understanding of how the mini course works and is called. The judge in the boat also reports the boat times to scoring and knows how that can affect the skier’s pass.</li>
    <li>A trick judge knows what each trick is and can call them out as a skier is performing as well as whether or not they receive credit for them.</li>
    <li>A jump judge either rides in the boat to check speeds, observe the boat path and alone determine if the skier lands and skis away in skiing position without falling. Jump judges may also work the video system to determine how far a jumper went.</li>
  </ul>
  <br />
  <h3 className="text-xl font-bold mt-6 mb-2">Assistant Scorer</h3>
  <ul>
    <li>You can become an assistant scorer in one or all of the three events in collegiate water skiing. Below is a breakdown of what each event’s scoring looks like.</li>
    <li>A slalom scorer is in charge of recording the scores the judges’ report and confirming if boat times are in tolerance per speed.</li>
    <li>A trick scorer consolidates the judges’ calls and records the tricks in the computer.</li>
    <li>A jump scorer records if the boat times are in tolerance per speed and distance of the jump.</li>
  </ul>
  <br />
  <h3 className="text-xl font-bold mt-6 mb-2">Assistant Driver</h3>
  <ul>
    <li>Becoming an assistant driver requires understanding and experience of boat paths that each of the three events takes. Extensive experience is required to know how to drive beginner and expert skiers as well as navigate turn islands. A driver must know how a boat is supposed to operate on a lake and know where to drive and where to stay away from. If you have never driven on a specific lake before, it is imperative that you ask the chief driver to take you in a boat and drive the lake before you start pulling skiers.</li>
    <li>The driver must always be aware of where the skier is at all times. They must have a knowledge of boat settings (speed, pull type, boat path, jump letter) and why a skier would opt for one over the other. Driver has an understanding of how to dock, fuel, and trailer a boat, as that is when damage will most likely occur and mistakes can be made.  This comes into play when driving a different boat company than you might be accustomed (Nautique props spin the opposite direction than MasterCraft and Malibu).</li>
    <li>Slalom: Have the knowledge of the course, boat, and boat times per speed and line length. Know how to set/spin around the island correctly at the end of a pass to ensure skier is safe and will have minimal waves for their return pass.  Driver has good understanding of skier skill level and can pull any skier from 19mph long line to 36mph 32 off.</li>
    <li>Trick: Understand how the boat pattern moves in reference to the lake/dock set up as well as other boat’s paths pulling a skier. Is conscious of sending rollers down the course and disrupting a skiers pass.</li>
    <li>Jump: Driver knows the differences between jump letter, RTB ON/OFF, and boat path through the course, and can offer that knowledge onto the skier.  Knows how to pick up a fallen skier and knows how to utilize a ¾ or double cut boat path on the return.</li>
  </ul>
  <br />
  <h3 className="text-xl font-bold mt-6 mb-2">Safety Coordinator</h3>
  <ul>
    <li>You can become a safety coordinator by attending a safety clinic. The Great Lakes Conference typically hosts at least one clinic during the fall season, usually held in Van Wert, Ohio. Every now and then there will also be a possible online clinic with information sent to all teams in advance to the clinic occurring.</li>
    <li>Now that you know the differences between the disciplines, you can start working towards ratings. You don’t need to do all of the above to become an official; if you only want to be a trick judge then you only need to fill out that section. These forms qualify you to become an assistant: this means is that you are qualified to work Class C or lower tournaments. Every NCWSA tournament is Class C, so this isn’t an issue. If you want to be able to work at higher level tournaments, you need to become a regular judge after working as an assistant for a few years. In order to get your rating, you must perform a certain number of tasks at tournaments, with a rated official, in order to become eligible personally.</li>
  </ul>
  <br />
  <h3 className="text-xl font-bold mt-6 mb-2">What to do at a tournament and how to actually obtain your rating</h3>
  <ul>
    <li>Now that you have chosen which rating you are working towards, you must print out the form and bring it to your respective tournament (doesn’t necessarily need to be a collegiate run event, you can participate in AWSA tournaments around the country). You can find each of those forms at the bottom of the page here. Print whichever form you need, fill out the top, and understand what needs to be done to complete your rating, and bring it with you.</li>
    <li>Once you are at the tournament, find your respective chief official and tell them that you are working towards your _____ rating. They will happily help accommodate you and make sure you can get it done.  For judging, ask to shadow a currently rated judge by jumping in a boat, sitting in a tower, or helping call tricks. For driving, ask the driver to allow for you to sit next to them to understand how everything works while pulling a skier.  For scoring, find the scorer and sit down next to them to observe radio talk, boat times, and how to input scores into the system. As a good rule of thumb, ask questions.  The official will be happy to answer them and it shows genuine interest in becoming that rating, which will make them more likely to sign off on that task.</li>
    <li>After you are done observing the rated official, you must obtain their signature as well as the chief’s signature – you cannot send the form in without them. As mentioned above, the entire form doesn’t need to be filled out if you don’t want to.  With that being said, if you want to become an official in a specific event, you must have that section completed.</li>
  </ul>
  <br />
  <h3 className="text-xl font-bold mt-6 mb-2">How to make sure credit is earned for working a tournament</h3>
  <ul>
    <li>Although every effort is made to keep track of who has worked as a judge or scorer at a tournament, the best way to avoid ‘missed credits’ is to double check the paperwork. Make sure the Chief official has you properly recorded in the tournament’s Record of Officials and make sure you have your personal official’s record completed and signed at each tournament.</li>
    <li>After the tournament, check USA Waterski to make sure that credit has been recorded under your officials records right away.</li>
  </ul>
  <br />
  <h3 className="text-xl font-bold mt-6 mb-2">Team Midwest Official’s Incentive</h3>
  The top 3 teams from the Midwest with the most points at the end of the combined Spring and Fall seasons will receive a cash reward at the WC banquet.<br />
  <ul>
    <li>First Place = $750</li>
    <li>Second Place = $500</li>
    <li>Third Place = $250</li>
  </ul>
  <br />
  <h3 className="text-xl font-bold mt-6 mb-2">Points Breakdown</h3>
  <ul>
    <li>New or upgraded officials in their respective discipline will receive the following point values upon completion: Points per event will be given out:  if you work slalom, trick, and jump at a tournament, you will receive 3 points. If you just worked jump, then you will receive 1 point.</li>
    <li>Judges and Scorers: 3 pts. per event for new and upgraded Judges and Scorers; 1 pt. per event worked (after completing your rating).</li>
    <li>Drivers: 6 pts. per event for new and upgraded Drivers (Assistant and above); 1 pt. per event worked for Drivers (after completing your rating)</li>
    <li>Safety: 6 pts.  per new and upgraded Safety (State and above); 3 pts. per tournament worked (ratings per event are not required and are not trackable, only the Chief Safety position at a tournament can be tracked, thus the higher number of points is given)</li>
    <li>TC – (Technical Coordinator): 9 pts. for a new TC rating; 3 pts. per tournament worked (TC can only be tracked per tournament, so higher points are awarded).</li>
  </ul>
  <br />
  <h3 className="text-xl font-bold mt-6 mb-2">Additional Information</h3>
  <ul>
    <li>You can find your personal ratings and events worked on the USA waterski homepage.  This is how your team’s points will be added up. Each official will send their ratings/events worked to their perspective team leader and then that team leader will compile all pictures for the team and send them to their conference chair.</li>
    <li>Only collegiate tournaments will be counted for points, though we encourage you to stay involved and help at summer tournaments as well!</li>
  </ul>
  <br />
</div>
</section>
<div id="records" className="mb-20"/>
<section>
        <h2 className="text-2xl font-bold mb-4 text-center text-3xl">Records</h2>
        <p className="text-center text-gray-600 mb-6">Historic Team Midwest records are archived on <a href="https://mcwsa.org" className="underline" target="_blank" rel="noopener noreferrer">mcwsa.org</a>.</p>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 mt-6">Men's Great Lakes Records</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded shadow text-sm">
            <thead className="bg-brand text-white">
              <tr>
                <th className="px-3 py-2">Year</th>
                <th className="px-3 py-2">Event</th>
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">School</th>
                <th className="px-3 py-2">Score</th>
                <th className="px-3 py-2">Tournament</th>
                <th className="px-3 py-2">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-gray-100">
                <td className="px-3 py-2">2006</td>
                <td className="px-3 py-2">Slalom</td>
                <td className="px-3 py-2">Cale Burdick</td>
                <td className="px-3 py-2">Purdue</td>
                <td className="px-3 py-2">2 @ 41 off</td>
                <td className="px-3 py-2">NCWSA Nationals</td>
                <td className="px-3 py-2">Bell Aqua - Sacramento, CA</td>
              </tr>
              <tr className="even:bg-gray-100">
                <td className="px-3 py-2">2006</td>
                <td className="px-3 py-2">Trick</td>
                <td className="px-3 py-2">Sergio Uribe</td>
                <td className="px-3 py-2">Purdue</td>
                <td className="px-3 py-2">4,310 points</td>
                <td className="px-3 py-2">Purdue Fall Classic</td>
                <td className="px-3 py-2">Hawthorn Lake - Danville, IN</td>
              </tr>
              <tr className="even:bg-gray-100">
                <td className="px-3 py-2">2023</td>
                <td className="px-3 py-2">Trick</td>
                <td className="px-3 py-2">Aidan Hughes</td>
                <td className="px-3 py-2">Michigan State</td>
                <td className="px-3 py-2">4,310 points</td>
                <td className="px-3 py-2">Spartan Ripfest</td>
                <td className="px-3 py-2">South Haven, MI</td>
              </tr>
              <tr className="even:bg-gray-100">
                <td className="px-3 py-2">2016</td>
                <td className="px-3 py-2">Jump</td>
                <td className="px-3 py-2">Briant "BSter" Detty</td>
                <td className="px-3 py-2">Indiana</td>
                <td className="px-3 py-2">166 feet</td>
                <td className="px-3 py-2">GL Conference Championships</td>
                <td className="px-3 py-2">Pleasant Shores - Van Wert, OH</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 mt-6">Women's Great Lakes Records</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded shadow text-sm">
            <thead className="bg-brand text-white">
              <tr>
                <th className="px-3 py-2">Year</th>
                <th className="px-3 py-2">Event</th>
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">School</th>
                <th className="px-3 py-2">Score</th>
                <th className="px-3 py-2">Tournament</th>
                <th className="px-3 py-2">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-gray-100">
                <td className="px-3 py-2">2006</td>
                <td className="px-3 py-2">Slalom</td>
                <td className="px-3 py-2">Kerbie Reader</td>
                <td className="px-3 py-2">Michigan</td>
                <td className="px-3 py-2">2 @ 35 off</td>
                <td className="px-3 py-2">Regionals</td>
                <td className="px-3 py-2">PITS - Decatur, IL</td>
              </tr>
              <tr className="even:bg-gray-100">
                <td className="px-3 py-2">2009</td>
                <td className="px-3 py-2">Slalom</td>
                <td className="px-3 py-2">Kayla McClure</td>
                <td className="px-3 py-2">Ball State</td>
                <td className="px-3 py-2">2 @ 35 off</td>
                <td className="px-3 py-2">Bearcat Buoy Battle</td>
                <td className="px-3 py-2">Lake Lottawatta - Hamilton, OH</td>
              </tr>
              <tr className="even:bg-gray-100">
                <td className="px-3 py-2">2013</td>
                <td className="px-3 py-2">Trick</td>
                <td className="px-3 py-2">Emily Van Treese</td>
                <td className="px-3 py-2">Miami (OH)</td>
                <td className="px-3 py-2">2,740 points</td>
                <td className="px-3 py-2">Ball State Fling</td>
                <td className="px-3 py-2">Pleasant Shores - Van Wert, OH</td>
              </tr>
              <tr className="even:bg-gray-100">
                <td className="px-3 py-2">2015</td>
                <td className="px-3 py-2">Jump</td>
                <td className="px-3 py-2">Riley Daulton</td>
                <td className="px-3 py-2">Ohio State</td>
                <td className="px-3 py-2">127 feet</td>
                <td className="px-3 py-2">NCWSA All Stars</td>
                <td className="px-3 py-2">Borderline Lake - Blaine, WA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </div>
    </>

  );
}
