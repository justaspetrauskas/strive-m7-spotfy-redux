import React from "react";
import {
  addSongToFav,
  removeSongFromFav,
} from "../redux/actions/favoriteSongs";
import { connect } from "react-redux";

const mapStateToProps = (s) => s;

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (song) => dispatch(addSongToFav(song)),
  removeFromFavourites: (song) => dispatch(removeSongFromFav(song)),
});

const Song = ({ favorites, addToFavourites, removeFromFavourites, track }) => {
  const isFav = favorites.favSongs.includes(track.title);
  console.log(isFav);

  const toggleFavourite = (e) => {
    if (isFav) {
      removeFromFavourites(track.title);
      e.target.classList.remove("liked-song");
    } else {
      addToFavourites(track.title);
      e.target.classList.add("liked-song");
    }
  };

  return (
    <div className="py-3 trackHover track">
      <span className="track-like" onClick={(e) => toggleFavourite(e)}>
        <svg
          className="track-like-heart"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          // style={{
          //   fill: favoriteJobList.includes(job._id) ? `#d74a41` : `transparent`,
          // }}
        >
          <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
        </svg>
      </span>
      {/* <box-icon name="heart" color="#f5eeee"></box-icon> */}
      <span className="card-title trackHover px-3" style={{ color: "white" }}>
        {track.title}
      </span>
      <small className="duration" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Song);
