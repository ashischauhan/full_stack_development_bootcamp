import React from 'react';

const PopularCommunityTags = () => {
  const popularTags = [
    { id: 1, name: 'United States', type: 'location' },
    { id: 2, name: 'All States', type: 'location' },
    { id: 3, name: 'News', type: 'category' },
    { id: 4, name: 'Sports', type: 'category' },
    { id: 5, name: 'Gaming', type: 'category' },
    { id: 6, name: 'Business', type: 'category' },
    { id: 7, name: 'Crypto', type: 'category' },
    { id: 8, name: 'Television', type: 'category' },
    { id: 9, name: 'Celebrity', type: 'category' },
  ];

  return (
    <div className="bg-white border border-reddit-border rounded-md mb-4 px-2 py-3">
      <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide pb-1">
        <button className="bg-blue-50 text-reddit-link hover:bg-blue-100 rounded-full px-3 py-1 font-medium text-sm whitespace-nowrap">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198c.031-.028.061-.056.091-.086L12 5.432Z" />
            </svg>
            Hot
          </span>
        </button>

        {popularTags.map((tag) => (
          <button
            key={tag.id}
            className="bg-reddit-hover hover:bg-gray-200 rounded-full px-3 py-1 text-sm whitespace-nowrap"
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularCommunityTags;
