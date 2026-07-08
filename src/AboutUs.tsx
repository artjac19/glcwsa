import FooterNav from "./FooterNav";

// Placeholder board — replace these entries with the real Great Lakes board as info comes in.
// Add a `photo` filename (dropped into public/) to show a headshot instead of the gray circle.
const BOARD: { name: string; position: string; school: string; photo?: string }[] = [
  { name: "TBD", position: "Conference Chair", school: "TBD" },
  { name: "TBD", position: "Vice Chair", school: "TBD" },
  { name: "TBD", position: "Secretary", school: "TBD" },
  { name: "TBD", position: "Treasurer", school: "TBD" },
  { name: "TBD", position: "Webmaster", school: "TBD" },
  { name: "TBD", position: "AAC Rep", school: "TBD" },
];

export default function AboutUs() {
  return (
    <>
      <div id="about-section" className="max-w-5xl mx-auto mt-24 p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          The Great Lakes Collegiate Water Ski Association (GLCWSA) is dedicated to promoting collegiate water skiing throughout the Great Lakes region.
          Our mission is to support student-athletes, foster sportsmanship, and organize competitive events for teams and individuals of all skill levels.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The GLCWSA is one of two conferences formed from the Midwest Collegiate Water Ski Association (MCWSA). Historic Team Midwest records
          and the Hall of Fame are preserved at <a href="https://mcwsa.org" className="underline" target="_blank" rel="noopener noreferrer">mcwsa.org</a>.
        </p>
        <p className="text-lg leading-relaxed">
          This website serves as a central hub for GLCWSA members, providing access to resources, team information, event schedules, and important updates.
        </p>
      </div>

      {/* Exec Board Section */}
      <div id="exec-board-section" className="max-w-5xl mx-auto mt-12 p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">GLCWSA Board</h1>
        <p className="text-gray-500 mb-6">Board profiles coming soon — check back once the new conference board is announced!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BOARD.map((member, i) => (
            <div key={i} className="bg-gray-50 rounded shadow p-6 flex flex-col items-center">
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

      {/* Bylaws Section */}
      <div id="bylaws-section" className="max-w-5xl mx-auto mt-12 p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">Bylaws</h1>
        <p className="text-lg leading-relaxed mb-6">
          The GLCWSA bylaws are being finalized. The MCWSA bylaws below remain in effect in the meantime.
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

      <div id="contact-section" className="max-w-5xl mx-auto mt-12 mb-24 p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          If you have any questions or concerns, please don't hesitate to <a href="https://forms.gle/ZshAZ17CmV5p2P9X9" className="underline">contact us</a>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Check us out on <a href="https://www.facebook.com/themcwsa/" className="underline">Facebook</a>.
        </p>
      </div>

    <FooterNav
      links={[
        { label: "About Us", id: "about-section" },
        { label: "Board", id: "exec-board-section" },
        { label: "Bylaws", id: "bylaws-section" },
        { label: "Contact Us", id: "contact-section" },
      ]}
    />
    </>
  );
}
