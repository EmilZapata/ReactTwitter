import React from 'react';

import { Tweet, Props as TweetProps } from './components/Tweet';

const defaultData: TweetProps = {
  avatar:
    'https://pbs.twimg.com/profile_images/1117976888108933120/mmFNPgcT_400x400.jpg',
  author: 'Emil Zapata',
  handler: '@Helmut_95',
  date_published: new Date(),
  text:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque reprehenderit illum mollitia, hic ex modi possimus odio pariatur fugiat voluptates suscipit ipsa amet culpa deleniti repellat a molestias? Facere, iure?',
};

export const App = () => {
  return (
    <>
      <header>React Twitter</header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Notifications</li>
          <li>Messages</li>
          <li>Profile</li>
        </ul>
      </nav>
      <main>
        <section>
          <h2>What's happening</h2>
        </section>
        <section>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <Tweet key={index} {...defaultData} />
            // <Tweet
            //   key={index}
            //   avatar="https://pbs.twimg.com/profile_images/1117976888108933120/mmFNPgcT_400x400.jpg"
            //   author="Emil Zapata"
            //   handler="@Helmut_95"
            //   date_published={new Date()}
            //   text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque reprehenderit illum mollitia, hic ex modi possimus odio pariatur fugiat voluptates suscipit ipsa amet culpa deleniti repellat a molestias? Facere, iure?"
            // />
          ))}
        </section>
      </main>
    </>
  );
};
