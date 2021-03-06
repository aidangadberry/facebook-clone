import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = (state, ownProps) => {
  const authorId = state.session.currentUserId;
  const url = ownProps.match.params.userUrl;
  let recipientId;
  
  if (url === undefined) {
    recipientId = authorId;
  } else {
    recipientId = state.entities.userUrls[url];
  }
  
  return ({
    userUrls: state.entities.userUrls,
    post: {
      authorId,
      recipientId,
      body: '' 
    },
    formType: 'Make Post',
    formButtonText: 'Post',
    author: state.entities.users[authorId],
    recipient: state.entities.users[recipientId]
  });
};

const mapDispatchToProps = dispatch => ({
  action: post => dispatch(createPost(post))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));