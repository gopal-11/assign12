// backend/controllers/ImagesController.js
import fetchDataFromExternalAPI from './fetchDataFromExternalAPI.js';
const internalServerErrMsg = 'Internal Server Error';
// EXTERNAL_API_URL to fetch the posts
const externalApiUrl = `https://dummyjson.com/posts`;

/**
 * /api/posts
 *   get:
 *     tags:
 *       - posts
 *     @description : returns the object of posts collection
 *     response:
 *       200:
 *          description: single object with collection of posts
 */
export const getPosts = async (req, res) => {
  try {
    const response = await fetchDataFromExternalAPI(externalApiUrl);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: internalServerErrMsg });
  }
};

/**
 * /api/posts/tag
 *   get:
 *     tags:
 *       - tag
 *     @description : returns the filtered object of posts collection by tag
 *     response:
 *       200:
 *          description: returns the filtered object of posts collection by tag
 */
export const getPostsByTag = async (req, res) => {
  const { tagtext } = req.query;
  try {
    const response = await fetchDataFromExternalAPI(externalApiUrl);
    // filter posts on basis of tagtext
    const filteredResponse = response.posts.filter((post) =>
      post.tags.includes(tagtext)
    );
    res.json({ posts: filteredResponse });
  } catch (error) {
    res.status(500).json({ error: internalServerErrMsg });
  }
};

/**
 * /api/posts/sort
 *   get:
 *     tags:
 *       - sort
 *     @description : returns the filtered object of posts collection by sort key
 *     response:
 *       200:
 *          description: returns the filtered object of posts collection by sort key
 */
export const getPostsBySort = async (req, res) => {
  const { sortOrder } = req.query;
  try {
    const response = await fetchDataFromExternalAPI(externalApiUrl);
    // method to decide ASC/DESC sort
    const sortFuntion =
      sortOrder === 'DESC' ? (a, b) => b - a : (a, b) => a - b;

    // sorted data on the basis of sort order
    const sortedData = response.posts.sort((a, b) =>
      sortFuntion(a.reactions, b.reactions)
    );
    res.json({ posts: sortedData });
  } catch (error) {
    res.status(500).json({ error: internalServerErrMsg });
  }
};

/**
 * /api/posts/find
 *   get:
 *     tags:
 *       - sort
 *     @description : returns the filtered object of posts collection by userId
 *     response:
 *       200:
 *          description: returns the filtered object of posts collection by userId
 */
export const getPostsById = async (req, res) => {
  const { userId } = req.query;
  try {
    const response = await fetchDataFromExternalAPI(externalApiUrl);
    // find post with userId
    const post = response.posts.filter((post) => post.userId == userId);

    res.json({ posts: post });
  } catch (error) {
    res.status(500).json({ error: internalServerErrMsg });
  }
};
