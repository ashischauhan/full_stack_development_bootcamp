import React from 'react';
import Header from '../components/Header';
import TrendingToday from '../components/TrendingToday';
import PostFeed from '../components/PostFeed';
import CommunitySection from '../components/CommunitySection';
import CreatePostBar from '../components/CreatePostBar';
import BackToTop from '../components/BackToTop';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-reddit-gray">
      <Header />

      <div className="max-w-screen-xl mx-auto px-4 pt-4">
        <TrendingToday />

        <div className="flex flex-col md:flex-row gap-6">
          {/* Main content */}
          <div className="flex-1">
            <CreatePostBar />
            <PostFeed />
          </div>

          {/* Sidebar */}
          <div className="md:w-80 space-y-4">
            <CommunitySection />

            {/* Advertisement placeholder */}
            <div className="bg-white rounded border border-reddit-border p-4">
              <div className="text-xs text-gray-500 mb-2">ADVERTISEMENT</div>
              <div className="bg-reddit-hover h-60 flex items-center justify-center text-gray-400">
                AD SPACE
              </div>
            </div>

            {/* Footer */}
            <div className="text-xs text-gray-500 p-2">
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-2">
                <a href="#" className="hover:underline">User Agreement</a>
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Content Policy</a>
                <a href="#" className="hover:underline">Moderator Code</a>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                <a href="#" className="hover:underline">English</a>
                <a href="#" className="hover:underline">Français</a>
                <a href="#" className="hover:underline">Italiano</a>
                <a href="#" className="hover:underline">Deutsch</a>
                <a href="#" className="hover:underline">Español</a>
                <a href="#" className="hover:underline">Português</a>
              </div>
              <div>
                Reddit Inc © 2024. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
};

export default HomePage;
