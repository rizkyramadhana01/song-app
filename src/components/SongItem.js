import React from 'react';
import { Link } from 'react-router-dom';

const SongItem = (props) => {
    return (
        <div className="col">
            <div className="card shadow p-3 mb-5 bg-body rounded">
                <div className="card-body p-2">
                    <div>
                        <h5 className="fw-bolder">{props.song.songTitle}</h5>
                        {props.song.artist}
                        <div className="mt-2 bg-transparent">           
                            <Link className="btn btn-outline-info mt-auto" to={`/Lyric/${props.song.songId}`}>View lyric</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SongItem;