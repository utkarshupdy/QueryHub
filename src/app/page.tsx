import React from 'react';
import HeroSection from './components/HeroSection';
import TopContributers from './components/TopContributers';
import LatestQuestions from './components/LatestQuestions';

function Page() {
  return (
    <div>
      <HeroSection />
      {/* Flex container for LatestQuestions and TopContributers */}
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full max-w-3xl">
          {/* Latest Questions Section */}
          <h2 className="text-2xl m-10 font-bold ">Latest Questions</h2>
          <LatestQuestions />
        </div>
        
        <div className="w-full max-w-3xl">
          {/* Top Contributors Section */}
          <h2 className="text-2xl font-bold m-10">Top Contributors</h2>
          <TopContributers />
        </div>
      </div>
    </div>
  );
}

export default Page;

