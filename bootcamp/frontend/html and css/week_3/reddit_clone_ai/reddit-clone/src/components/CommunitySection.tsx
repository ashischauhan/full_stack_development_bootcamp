import React from 'react';

interface CommunityItemProps {
  name: string;
  iconUrl?: string;
}

const CommunityItem: React.FC<CommunityItemProps> = ({ name, iconUrl }) => {
  return (
    <a
      href={`/r/${name.toLowerCase()}`}
      className="flex items-center p-2 hover:bg-reddit-hover rounded-md"
    >
      <div className="h-8 w-8 rounded-full overflow-hidden bg-blue-500 flex items-center justify-center text-white mr-2">
        {iconUrl ? (
          <img src={iconUrl} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span>{name.charAt(0).toUpperCase()}</span>
        )}
      </div>
      <span className="font-medium">r/{name}</span>
    </a>
  );
};

const CommunitySection = () => {
  const communities = [
    { name: 'pcmasterrace', iconUrl: 'https://picsum.photos/32/32?random=10' },
    { name: 'halo', iconUrl: 'https://picsum.photos/32/32?random=11' },
    { name: 'Minecraft', iconUrl: 'https://picsum.photos/32/32?random=12' },
    { name: 'NintendoSwitch', iconUrl: 'https://picsum.photos/32/32?random=13' },
    { name: '2007scape', iconUrl: 'https://picsum.photos/32/32?random=14' },
  ];

  return (
    <div className="bg-white rounded border border-reddit-border p-4">
      <h2 className="font-medium text-base mb-4">Gaming communities taking it to the next level</h2>
      <div className="space-y-1">
        {communities.map((community, index) => (
          <CommunityItem
            key={index}
            name={community.name}
            iconUrl={community.iconUrl}
          />
        ))}
      </div>
      <button className="w-full bg-reddit-link hover:bg-blue-600 text-white py-1.5 rounded-full text-sm font-bold mt-4">
        VIEW ALL
      </button>

      <div className="mt-4 pt-4 border-t border-reddit-border flex justify-between flex-wrap text-xs text-gray-500 gap-1">
        <button className="hover:underline">Top</button>
        <button className="hover:underline">Near You</button>
        <button className="hover:underline">Outdoors</button>
        <button className="hover:underline">Beauty</button>
      </div>
    </div>
  );
};

export default CommunitySection;
