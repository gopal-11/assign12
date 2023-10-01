import './index.css';

// Renders the images on the ui
const Card = ({ posts }) => {
  return (
    <div className="image-container">
      <div>
        {
          <>
            <div className="items">
              {posts.map((post, index) => {
                return (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '10px',
                      alignItems: 'start',
                      boxShadow: '0 3px 10px 0 black',
                      cursor: 'pointer',
                      borderRadius: '4px',
                      paddingBottom: '10px',
                      margin: '10px',
                      textAlign: 'start',
                    }}
                    key={index}
                  >
                    <div>Id: {post.id}</div>
                    <div>userId: {post.userId}</div>
                    <div>Reactions: {post.reactions}</div>
                    <div>
                      Tags:{' '}
                      {post.tags.map((tag) => (
                        <span>{tag} </span>
                      ))}
                    </div>
                    <div>Description: {post.body}</div>
                  </div>
                );
              })}
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Card;
