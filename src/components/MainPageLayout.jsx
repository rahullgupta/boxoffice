import React from 'react';
import Navs from './Navs';
import Title from './Title';

function MainPageLayout({ children }) {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you looking for a TV Show or an actor?"
      />
      <Navs />
      {children}
    </div>
  );
}

export default MainPageLayout;
