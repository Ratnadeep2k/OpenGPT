import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import useMovieTrailer from '../hooks/useMovieTrailer';
// fetching the Trailer and Update the Trailer Video
export const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store=>store.movies.trailerVideo)
    useMovieTrailer();
   

    return (
        <div>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailerVideo?.key} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
};
export default VideoBackground