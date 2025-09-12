import React from 'react';
import { UserCircleIcon, PhotoIcon, LinkIcon } from '@heroicons/react/24/outline';

const CreatePostBar = () => {
  return (
    <div className="bg-white rounded-md border border-reddit-border mb-4 p-2">
      <div className="flex items-center">
        <UserCircleIcon className="h-8 w-8 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Create Post"
          className="flex-1 rounded-md border border-reddit-border bg-reddit-hover py-2 px-4 text-sm focus:outline-none focus:border-blue-500"
        />
        <button className="ml-2 text-gray-500 p-2 hover:bg-reddit-hover rounded-md">
          <PhotoIcon className="h-6 w-6" />
        </button>
        <button className="ml-2 text-gray-500 p-2 hover:bg-reddit-hover rounded-md">
          <LinkIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default CreatePostBar;
