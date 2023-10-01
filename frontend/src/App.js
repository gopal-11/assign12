// frontend/src/App.js
import React, { useState, useEffect } from 'react';
// required file imported
import Card from './components/card/Card';
import InputForm from './components/input/InputForm';
import './App.css';

const APIURL = `http://localhost:3001/api/posts`;

// Entry point of the app
function App() {
  const [posts, setPosts] = useState([]);
  const [tagValue, setTagValue] = useState('');
  const [sortOrder, setSortOrder] = useState('ASC');
  const [userId, setUserId] = useState(0);

  // form submit handler
  const handleSearch = () => {
    fetch(`${APIURL}/tag?tagtext=${tagValue}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data?.posts);
      });
  };

  // handler for sort order change
  const handleSort = () => {
    let sortValue = 'ASC';
    if (sortOrder === 'ASC') {
      sortValue = 'DESC';
    }
    setSortOrder(sortValue);
    fetch(`${APIURL}/sort?sortOrder=${sortOrder}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data?.posts);
      });
  };

  // handler for find post by userId
  const handleFindPost = () => {
    let sortValue = 'ASC';
    if (sortOrder === 'ASC') {
      sortValue = 'DESC';
    }
    setSortOrder(sortValue);
    fetch(`${APIURL}/find?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data?.posts);
      });
  };

  // Fetch data from the API
  useEffect(() => {
    fetch(APIURL)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data?.posts);
      });
  }, []);

  return (
    <div className="App">
      <InputForm
        tagValue={tagValue}
        setTagValue={setTagValue}
        handleSearch={handleSearch}
        sortOrder={sortOrder}
        handleSort={handleSort}
        userId={userId}
        handleFindPost={handleFindPost}
        setUserId={setUserId}
      />
      <Card posts={posts} />
    </div>
  );
}

export default App;
