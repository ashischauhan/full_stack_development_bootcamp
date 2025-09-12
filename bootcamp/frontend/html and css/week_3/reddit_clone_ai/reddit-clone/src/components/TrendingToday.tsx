import React from 'react';

interface TrendingItemProps {
  title: string;
  subtitle: string;
  subreddit: string;
  imageUrl: string;
}

const TrendingItem: React.FC<TrendingItemProps> = ({ title, subtitle, subreddit, imageUrl }) => {
  return (
    <div
      className="relative h-48 rounded-lg overflow-hidden cursor-pointer"
      style={{ minWidth: "220px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 p-3 text-white">
        <h3 className="font-bold text-md line-clamp-2">{title}</h3>
        <p className="text-sm line-clamp-1 mb-1">{subtitle}</p>
        <div className="flex items-center text-xs">
          <span>r/{subreddit}</span>
        </div>
      </div>
    </div>
  );
};

const TrendingToday = () => {
  const trendingItems = [
    {
      title: '60 Minutes',
      subtitle: "Trump '60 Minutes' Interview Draws Almost 17 Million Viewers",
      subreddit: 'television',
      imageUrl: 'https://picsum.photos/400/300?random=1'
    },
    {
      title: 'Pogba',
      subtitle: "Pogba translating Ole's instructions for Cavani",
      subreddit: 'reddevils',
      imageUrl: 'https://picsum.photos/400/300?random=2'
    },
    {
      title: 'Aespa',
      subtitle: "SM Entertainment to debut new girl group aespa",
      subreddit: 'kpop',
      imageUrl: 'https://picsum.photos/400/300?random=3'
    },
    {
      title: 'Chief of Police',
      subtitle: "NYPD Chief Credits Union Square Chants",
      subreddit: 'politics',
      imageUrl: 'https://picsum.photos/400/300?random=4'
    }
  ];

  return (
    <div className="bg-white p-4 mb-4">
      <h2 className="font-medium text-lg mb-3">Trending today</h2>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {trendingItems.map((item, index) => (
          <TrendingItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            subreddit={item.subreddit}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingToday;
