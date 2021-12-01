import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SongLyric from '../components/SongLyric';

const Lyric = () => {
    const [song, setSong] = useState({});
    const { songId } = useParams();

    useEffect(() => {
        fetch(`https://api-song-lyrics.herokuapp.com/lyrics/${songId}`)
            .then(response => response.json())
            .then(data => setSong(data.data));
    },
        // eslint-disable-next-line
        []);
    return (
        <>
        <Navigation />
        <div className="container"> 
            <SongLyric song={song} />
        </div>
        <Footer />
        </>
    );
}

export default Lyric;