import React from "react";
import SearchResult from "./SearchResult";
import PropTypes from "prop-types";

function SearchResults({ playVideo, results }) {

  return (
    <div>
      <ul className="results-list">
        {results.map(result => {
          return (
            <SearchResult
              playVideo={playVideo}
              result={result}
              key={result.id.videoId}
            />
          );
        })}
      </ul>
    </div>
  );

  SearchResults.propTypes = {
    playVideo: PropTypes.func,
    results: PropTypes.string
  };

}


export default SearchResults;
