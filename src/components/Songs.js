import React, { useState, useEffect } from 'react';
import SongItem from './SongItem';

const Songs = () => {
    const [songs, setSongs] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        // hit endpoint Song Lyrics to get songs data
        fetch('https://api-song-lyrics.herokuapp.com/hot')
            .then(response => response.json())
            .then(data => setSongs(data.data));
        // eslint-disable-next-line
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://api-song-lyrics.herokuapp.com/search?q=${text}`)
            .then(response => response.json())
            .then(data => setSongs(data.data));

        setText('');
    }
    const handleChange = (e) => { setText(e.target.value) };

    return (
        <section className="py-3">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row">
                    <div className="col-8">

                        {songs.map(song => <SongItem key={song.songId} song={song} />)}

                    </div>
                    <div className="col">
                        <div className="card shadow p-3 mb-5 bg-body rounded">
                            <div className="card-body p-2">
                                <form onSubmit={handleSubmit}>
                                    <h2 className="text-info">Search Your Favorite Song</h2>
                                    <input type="text" className="form-control" placeholder="Type here" onChange={handleChange} value={text} required />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Songs;