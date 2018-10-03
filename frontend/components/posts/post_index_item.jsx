import React from 'react';
import { Link } from 'react-router-dom';
import PostEditButton from './post_edit_button';

class PostIndexItem extends React.Component {
  postRecipient(author, recipient) {
    if (author !== recipient) {
      return <span>
        <i className="fas fa-caret-right"></i><Link to={`/${recipient.userUrl}`}>
          {recipient.fname} {recipient.lname}
        </Link>
      </span>;
    }
  }

  render() {
    const { author, recipient, post } = this.props;

    return (
      <div className="post-container">
        <div className="post-header">
          <div>
            <div>
              <Link to={`/${author.userUrl}`}>
                {author.fname} {author.lname}
              </Link>
              {this.postRecipient(author, recipient)}
            </div>
            <PostEditButton post={post} />
          </div>
          <div className="date">{post.createdAt}</div>
        </div>
        <div className="post-content">
          {post.body}
        </div>
      </div>
    );
  }
}

export default PostIndexItem;