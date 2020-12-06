import React from 'react';
/* import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'; */
/* import distanceInWords from 'date-fns/formatDistanceToNow'; */

const PostItem = ({post, refresh}) => {

  return (
    <article className="post">
      <section className="upvote">
            <button>▲</button>
      </section>
      <section className="body">
        <div className="title">
          <a href={post.url}>{post.description}</a>
        </div>
        <div className="meta">
          <span>
            {post.votes} vote{post.votes > 1 ? 's' : ''}
          </span>
      
        </div>
      </section>
    </article>
  );
};

export default PostItem;