// frontend/src/components/input/InputForm.js
import './index.css';

const InputForm = ({
  tagValue,
  setTagValue,
  handleSearch,
  sortOrder,
  handleSort,
  userId,
  handleFindPost,
  setUserId,
}) => {
  // input handler for search key
  const handleInputValue = (e) => {
    setTagValue(e.target.value);
  };

  return (
    <div className="input-form">
      <div className="margin-left10">
        <input
          placeholder="Enter tag value"
          value={tagValue}
          onChange={handleInputValue}
        />
      </div>
      <button className="margin-left10" onClick={handleSearch}>
        Search
      </button>
      <button className="margin-left10" onClick={handleSort}>
        {sortOrder}
      </button>

      <div className="margin-left10">
        <input
          type="number"
          placeholder="Enter user id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <button className="margin-left10" onClick={handleFindPost}>
        Find
      </button>
    </div>
  );
};

export default InputForm;
