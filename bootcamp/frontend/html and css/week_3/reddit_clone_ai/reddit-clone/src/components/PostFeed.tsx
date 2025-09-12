import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, ChatBubbleLeftIcon, GiftIcon, ShareIcon, BookmarkIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import PopularCommunityTags from './PopularCommunityTags';

interface Post {
  id: number;
  title: string;
  author: string;
  subreddit: string;
  upvotes: number;
  commentCount: number;
  timePosted: string;
  content?: string;
  imageUrl?: string;
}

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="bg-white rounded border border-reddit-border mb-3 hover:border-gray-400 cursor-pointer">
      {/* Vote buttons */}
      <div className="flex">
        <div className="w-10 bg-reddit-hover flex flex-col items-center pt-2 pb-1">
          <button className="text-gray-400 hover:text-reddit-upvote">
            <ArrowUpIcon className="h-6 w-6" />
          </button>
          <span className="text-xs font-bold my-1">{post.upvotes}</span>
          <button className="text-gray-400 hover:text-reddit-downvote">
            <ArrowDownIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-2 w-full">
          {/* Post header */}
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <span className="font-bold text-black">r/{post.subreddit}</span>
            <span className="mx-1">•</span>
            <span>Posted by u/{post.author}</span>
            <span className="mx-1">•</span>
            <span>{post.timePosted}</span>
          </div>

          {/* Post title */}
          <h3 className="text-lg font-medium mb-2">{post.title}</h3>

          {/* Post content */}
          {post.content && <p className="text-sm mb-2">{post.content}</p>}

          {/* Post image */}
          {post.imageUrl && (
            <div className="mb-2 max-h-[512px] overflow-hidden">
              <img src={post.imageUrl} alt={post.title} className="w-full object-contain" />
            </div>
          )}

          {/* Post actions */}
          <div className="flex items-center text-xs text-gray-500 pt-1">
            <button className="flex items-center mr-4 hover:bg-reddit-hover p-1 rounded">
              <ChatBubbleLeftIcon className="h-4 w-4 mr-1" />
              <span>{post.commentCount} Comments</span>
            </button>
            <button className="flex items-center mr-4 hover:bg-reddit-hover p-1 rounded">
              <GiftIcon className="h-4 w-4 mr-1" />
              <span>Award</span>
            </button>
            <button className="flex items-center mr-4 hover:bg-reddit-hover p-1 rounded">
              <ShareIcon className="h-4 w-4 mr-1" />
              <span>Share</span>
            </button>
            <button className="flex items-center mr-4 hover:bg-reddit-hover p-1 rounded">
              <BookmarkIcon className="h-4 w-4 mr-1" />
              <span>Save</span>
            </button>
            <button className="hover:bg-reddit-hover p-1 rounded">
              <EllipsisHorizontalIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostFeed = () => {
  const posts: Post[] = [
    {
      id: 1,
      title: 'What video game caused you the most amount of rage?',
      author: 'cardoorhookhand',
      subreddit: 'AskReddit',
      upvotes: 53800,
      commentCount: 32900,
      timePosted: '11 hours ago',
      content: '',
    },
    {
      id: 2,
      title: 'As as person looking at the US from an outside perspective, why would you vote for Trump?',
      author: 'TooAfraidToAsk',
      subreddit: 'TooAfraidToAsk',
      upvotes: 17900,
      commentCount: 8200,
      timePosted: '16 hours ago',
      content: 'I dont understand it, this man is on the knifes edge of running a dictatorship. Can someone help me here?',
    },
    {
      id: 3,
      title: 'ePBT Skadi - Giveaway!',
      author: 'CaptainVince02',
      subreddit: 'MechanicalKeyboards',
      upvotes: 11400,
      commentCount: 0,
      timePosted: '11 hours ago',
      imageUrl: 'https://picsum.photos/600/400?random=5',
    },
    {
      id: 4,
      title: 'Is Shadow of the Erdtree Too Expensive? (It\'s Not) | Elden Ring',
      author: 'Estellaa',
      subreddit: 'Eldenring',
      upvotes: 8700,
      commentCount: 456,
      timePosted: '4 hours ago',
      imageUrl: 'https://picsum.photos/600/400?random=6',
    },
    {
      id: 5,
      title: 'Woke Gamers Are Mind Broken By Helldivers 2',
      author: 'AsmongoldClips',
      subreddit: 'gaming',
      upvotes: 4500,
      commentCount: 678,
      timePosted: '6 hours ago',
      imageUrl: 'https://picsum.photos/600/400?random=7',
    },
    {
      id: 6,
      title: 'Battlefield 2042 in 2024 is... Fixed?',
      author: 'MrSaviorG',
      subreddit: 'battlefield',
      upvotes: 3290,
      commentCount: 210,
      timePosted: '2 months ago',
      imageUrl: 'https://picsum.photos/600/400?random=8',
    },
    {
      id: 7,
      title: 'Ubisoft: This is our quadruple A game. Looks like a scrapped mobile game ported to PC',
      author: 'aidoleonardo220',
      subreddit: 'pcgaming',
      upvotes: 2145,
      commentCount: 387,
      timePosted: '14 hours ago',
      content: 'Ubisoft really has no quality control anymore. What happened to this once-great company?',
    },
  ];

  return (
    <div className="space-y-3">
      <PopularCommunityTags />

      <div className="bg-white p-1 border border-reddit-border rounded mb-3">
        <div className="flex p-1 text-sm font-semibold">
          <button className="flex-1 py-1 flex justify-center text-blue-600 border-b-2 border-blue-600">
            <span>Hot</span>
          </button>
          <button className="flex-1 py-1 flex justify-center text-gray-500 hover:bg-reddit-hover rounded">
            <span>New</span>
          </button>
          <button className="flex-1 py-1 flex justify-center text-gray-500 hover:bg-reddit-hover rounded">
            <span>Top</span>
          </button>
          <button className="flex-1 py-1 flex justify-center text-gray-500 hover:bg-reddit-hover rounded hidden sm:flex">
            <span>Rising</span>
          </button>
          <button className="px-3 py-1 flex justify-center items-center text-gray-500 hover:bg-reddit-hover rounded">
            <EllipsisHorizontalIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
