import React from 'react';
import { Link } from 'react-router-dom';

const SongLyric = (props) => {
    return (
        <div className="mt-4    card shadow p-3 mb-5 bg-body rounded">
            <div className="card-body p-2">
                <div classNames="row">
                    <div classNames="col-8">
                        <h1 className="text-info">{props.song.songTitle}</h1>
                        <h5 className="my-1 mb-3"><span>Artist: </span>{props.song.artist}</h5>
                    </div>
                    <div className="col">
                        <p classNames="my-4"><span className="text-info">Lyric: </span>{props.song.songLyrics}</p>
                        <Link className="btn btn-outline-info mt-auto" to="/">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SongLyric;