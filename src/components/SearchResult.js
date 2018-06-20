import React from "react";

function SearchResult({ result, playVideo }) {

  const { snippet } = result;
  const { videoId } = result.id;
  const { description, title } = snippet;
  const { height, width, url } = snippet.thumbnails.default;
  return (
    <li
      className="result-item"
      onClick={event => {
        playVideo(videoId);
      }}
    >
      <img className="result-img" src={url} height={height} width={width} />
      <div className="result-description">
        <div>
          <strong>{title}</strong>
        </div>
        {description}
      </div>
    </li>
  );
}


export default SearchResult;
