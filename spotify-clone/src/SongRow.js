import React from 'react'

function SongRow({track}) {
    return <div className="songRow">
        <img src="" alt=""/>
        <dib className="songRow__info">
            <h1>{track.name}</h1>
            <p>{track.artists.map((artist) => artist.name).join(", ")} -{" "}
                {track.album.name}
            </p>
        </dib>
    </div>
}

export default SongRow
