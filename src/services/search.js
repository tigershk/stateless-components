const key = "AIzaSyDmT5UdKhNCTTcYIgtNI3iXUStYIi4yQpg";

function search(query) {
  return fetch(`https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&type=video&key=${key}`)
    .then(response => response.json())
    .then(json => json);
}

export default search;
