import FooterNav from "./FooterNav";

// GLR Board — replace these entries with the real Great Lakes board as info comes in.
// Add a `photo` filename (dropped into public/) to show a headshot instead of the gray circle.
const BOARD: { name: string; position: string; school: string; photo?: string }[] = [
  { name: "Braylen Lynch", position: "Conference Chair", school: "Miami of Ohio (Alum)", photo: "IMG_4018.jpeg" },
  { name: "Mary Nelson", position: "Vice Chair", school: "Miami of Ohio (Alum)", photo: "IMG_4019.jpeg" },
  { name: "Ian Voss", position: "Secretary", school: "University of Cincinnati", photo: "IMG_4021.jpeg" },
  { name: "Katie Harvat", position: "Treasurer", school: "Miami Of Ohio (Alum)", photo: "IMG_4020.jpeg" },
  { name: "Kasar Moos", position: "AAC Rep", school: "Ohio State University", photo: "IMG_4017.jpeg" },
];

// Placeholder committee — replace these entries with the real Great Lakes committee as info comes in.
const COMMITTEE: { name: string; position: string; school?: string }[] = [
  { name: "Will Fielder", position: "Officials & Alumni", school: "Michigan State (Alum)" },
  { name: "Mario D'Annunzio", position: "Webmaster", school: "Grand Valley State University" },
  { name: "Ashton Krill", position: "Team Development", school: "Michigan State" },
  { name: "Finaly Donovan", position: "AAC Committee", school: "Purdue University" },
  { name: "Jack Keunning", position: "AAC Committee", school: "University of Cincinnati" },
];

// Placeholder NCWSA committee — replace these entries with the real NCWSA committee as info comes in.
const NCWSA_COMMITTEE: { name: string; position: string; school?: string }[] = [
  { name: "Isabel Kinsinger", position: "Marketing", school: "University of Cincinnati" },
  { name: "Colin Pots", position: "NCWSA Awards Rep.", school: "Ohio State University" },
  { name: "Aden Dzierzawski", position: "International Relations", school: "Ohio University" },
  { name: "Lydia Habel", position: "Membership", school: "University of Cincinnati" },
  { name: "Ellie Williams", position: "Operations", school: "University of Michigan (Alum)" },
];

export default function AboutUs() {
  return (
    <>
      {/* About Us section temporarily hidden — change `false` to `true` to restore */}
      {false && (
      <div id="about-section" className="max-w-5xl mx-auto mt-24 p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          The Great Lakes Region (GLR) is dedicated to promoting collegiate water skiing throughout the collegiate waterski community.
          Our mission is to support student-athletes, foster sportsmanship, and organize competitive events for teams and individuals of all skill levels.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The Great Lakes Region is one of two conferences formed from the Midwest Collegiate Water Ski Association (MCWSA). Historic Team Midwest records
          and the Hall of Fame are preserved at <a href="https://mcwsa.org" className="underline" target="_blank" rel="noopener noreferrer">mcwsa.org</a>.
        </p>
        <p className="text-lg leading-relaxed">
          This website serves as a central hub for GLR members, providing access to resources, team information, event schedules, and important updates.
        </p>
      </div>
      )}

      {/* Exec Board Section */}
      <div id="exec-board-section" className="max-w-5xl mx-auto mt-24 mb-24 p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">GLR Board</h1>
        <p className="text-gray-500 mb-6">Below is your Great Lakes Region Executive Board consisting of current and alumni team athletes!</p>
        <div className="flex flex-wrap justify-center gap-8">
          {BOARD.map((member, i) => (
            <div key={i} className="bg-gray-50 rounded shadow p-6 flex flex-col items-center w-72">
              {member.photo ? (
                <img
                  src={`${import.meta.env.BASE_URL}${member.photo}`}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-gray-300 shadow"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400">Photo</div>
              )}
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <div className="text-sm text-gray-600 mb-2">Board Position: {member.position}</div>
              <div className="text-sm text-gray-600 mb-2">School: {member.school}</div>
            </div>
          ))}
        </div>
      </div>

      {/* GLR Committee Section */}
      <div id="glr-committee-section" className="max-w-5xl mx-auto mt-24 p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">GLR Committee</h1>
        <p className="text-gray-500 mb-6">Below is your Great Lakes Region Committee consisting of current and alumni team athletes!</p>
        <div className="max-w-2xl mx-auto overflow-x-auto mb-6">
          <table className="min-w-[300px] w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="text-left text-white px-4 py-2 text-lg font-semibold bg-brand ">GLR Committee</th>
                <th className="text-left text-white px-4 py-2 text-lg font-semibold bg-brand ">Position</th>
                <th className="text-left text-white px-4 py-2 text-lg font-semibold bg-brand ">School</th>
              </tr>
            </thead>
            <tbody>
              {COMMITTEE.map((member, i) => (
                <tr key={i}>
                  <td className="px-4 py-1">{member.name}</td>
                  <td className="px-4 py-1">{member.position}</td>
                  <td className="px-4 py-1">
                    <input
                      type="text"
                      placeholder="Enter school"
                      defaultValue={member.school ?? ""}
                      className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* NCWSA Committee Section */}
      <div id="ncwsa-committee-section" className="max-w-5xl mx-auto mt-24 mb-24 p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">NCWSA Committee</h1>
        <div className="max-w-2xl mx-auto overflow-x-auto mb-6">
          <table className="min-w-[300px] w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="text-left text-white px-4 py-2 text-lg font-semibold bg-brand ">NCWSA Committee</th>
                <th className="text-left text-white px-4 py-2 text-lg font-semibold bg-brand ">Position</th>
                <th className="text-left text-white px-4 py-2 text-lg font-semibold bg-brand ">School</th>
              </tr>
            </thead>
            <tbody>
              {NCWSA_COMMITTEE.map((member, i) => (
                <tr key={i}>
                  <td className="px-4 py-1">{member.name}</td>
                  <td className="px-4 py-1">{member.position}</td>
                  <td className="px-4 py-1">
                    <input
                      type="text"
                      placeholder="Enter school"
                      defaultValue={member.school ?? ""}
                      className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bylaws Section — temporarily hidden, change `false` to `true` to restore */}
      {false && (
      <div id="bylaws-section" className="max-w-5xl mx-auto mt-12 p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">Bylaws</h1>
        <p className="text-lg leading-relaxed mb-6">
          The GLR bylaws are being finalized. The GLR bylaws below remain in effect in the meantime.
        </p>
        <a
          href={`${import.meta.env.BASE_URL}bylaws.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-brand text-white font-semibold rounded hover:bg-brand/85 transition"
        >
          View Bylaws
        </a>
      </div>
      )}

      {/* Contact section temporarily hidden — change `false` to `true` to restore */}
      {false && (
      <div id="contact-section" className="max-w-5xl mx-auto mt-12 mb-24 p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          If you have any questions or concerns, please don't hesitate to <a href="https://forms.gle/ZshAZ17CmV5p2P9X9" className="underline">contact us</a>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Check us out on <a href="https://www.instagram.com/greatlakeswaterski?fbclid=IwY2xjawT6pFNwZG9mBWV4dG4DYWVtAjEwAGJyaWQRMW1JNzh0NGNqWlQ5bDR2WlpzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEesDrTUdd3aXa1xq5uJ9oJc6xBBRpPUTbp0tMexpMs6p3jxQPRDKHxF2wqrk4_aem_TeiWcjtwAM1AJXW21ft0UA" className="underline">Facebook</a>.
        </p>
      </div>
      )}

    <FooterNav
      links={[
        { label: "Board", id: "exec-board-section" },
        { label: "Committee", id: "glr-committee-section" },
      ]}
    />
    </>
  );
}
