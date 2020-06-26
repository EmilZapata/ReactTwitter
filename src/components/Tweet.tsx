/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

type Author = {
  name: string;
  handler: string;
};

export interface Props {
  avatar: string;
  author: string;
  handler: string;
  text: string;
  date_published: Date;
}

export const Tweet = ({
  avatar,
  author,
  text,
  handler,
  date_published,
}: Props) => {
  return (
    <article
      css={css`
        border: 1px solid #eaeaea;
        border-radius: 10px;
        background-color: #fafafa;
        padding: 1rem;
        margin: 1rem;
        display: flex;
        flex-direction: row;
      `}
    >
      <figure
        css={css`
          width: 90px;
          margin: 0.25rem;
          padding: 0;
        `}
      >
        <img
          css={css`
            width: 100%;
            border-radius: 50%;
          `}
          src={avatar}
          alt={author}
        />
      </figure>
      <div>
        <header>
          <span
            css={css`
              font-weight: bold;
              margin: 0.25rem;
            `}
          >
            {author}
          </span>
          <span
            css={css`
              color: gray;
              margin: 0.25rem;
            `}
          >
            {handler}
          </span>
          <span
            css={css`
              margin: 0.25rem;
            `}
          >
            {date_published.toDateString()}
          </span>
        </header>
        <section
          css={css`
            margin: 0.25rem;
          `}
        >
          {text}
        </section>
        <nav
          css={css`
            margin: 0.25rem;
          `}
        >
          <button>Comment</button>
          <button>Retweet</button>
          <button>Like</button>
        </nav>
      </div>
    </article>
  );
};
