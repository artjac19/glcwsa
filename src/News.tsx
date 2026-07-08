

interface NewsProps {
  headline: string;
  imageUrl: string;
  imageAlt?: string;
  linkUrl?: string;
  description?: string;
  linkTitle?: string;
}

export default function News({
  headline,
  imageUrl,
  imageAlt = "News Thumbnail",
  linkUrl = "https://example.com",
  description = "This is a sample description for the news item. It can be a few sentences long and will be replaced with real news content later. The image on the left is clickable and leads to more details.",
  linkTitle = "Read More"
}: NewsProps) {
  return (
    <div className="flex flex-col md:flex-row items-start bg-white rounded-3xl border-3 border-black p-4 md:p-8 max-w-5xl w-full mx-auto h-auto mb-10">
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-full md:w-auto mb-4 md:mb-0 flex-shrink-0"
      >
        <div className="flex rounded-lg flex-col items-center p-3 md:p-4 bg-pink-100 hover:bg-pink-200 transition cursor-pointer shadow-md hover:shadow-lg md:max-w-xs w-full md:w-[260px]">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full max-h-48 md:max-h-64 object-cover mx-auto mb-2 rounded-lg"
          />
          <span className="flex items-center gap-2 text-pink-700 font-semibold text-base md:text-lg mt-1 group-hover:underline">
            {linkTitle}
          </span>
        </div>
      </a>
      <div className="md:ml-6 flex-1 text-center md:text-left flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-4">{headline}</h3>
        <p className="text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
