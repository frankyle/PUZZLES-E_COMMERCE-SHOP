import React from 'react';
import LeftHero from './LeftHero';
import RightHero from './RightHero';

function HeroMain() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div>
        <LeftHero />
      </div>
      <div>
        <RightHero />
      </div>
    </div>
  );
}

export default HeroMain;
