//Exercise 1: Get the array of all Artists.
function getAllArtists(array) {
    let result = array.map(song => song.artist);
    return result;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist) {
    let result = array.filter((song) => song.artist === artist);
    return result;
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(array) {
    return array.slice().sort((a, b) => a.title.localeCompare(b.title)).map(song => song.title).slice(0, 10);
};

//Exercise 4: Order by year, ascending
function orderByYear(array) {
    return array.slice().sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
};

//Exercise 5: Filter songs by genre
function songsByGenre(array, genre) {
    return array.filter(song => song.genre.includes(genre));
};

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(array) {
    return array.map(song => {
        let minutes = parseInt(song.duration);
        let seconds = parseInt(song.duration.split('min ')[1]);
        return {
            ...song,
            duration: minutes * 60 + seconds
        };
    });
};

//Exercise 7: Get the longest song
function getLongestSong(array) {
    const toseconds = (duration) => {
        const minutes = parseInt(duration);
        const seconds = parseInt(duration.split('min ')[1]);
        return minutes * 60 + seconds;
    };
    const max = Math.max(...array.map(song => toseconds(song.duration)));
    return array.filter(song => toseconds(song.duration) === max).map(song => ({...song, duration: toseconds(song.duration) }));
};

//Exercise 8: Get the shortest song
function getShortestSong(array) {
    let shortestSong = array.reduce((shortest, current) => {
        let shortestDuration = parseInt(shortest.duration.split(':')[0]) * 60 + parseInt(shortest.duration.split(':')[1]);
        let currentDuration = parseInt(current.duration.split(':')[0]) * 60 + parseInt(current.duration.split(':')[1]);
        return currentDuration < shortestDuration ? current : shortest;
    });
    return shortestSong;
};


export {
    getAllArtists,
    getSongsFromArtist,
    orderAlphabetically,
    orderByYear,
    songsByGenre,
    minutsToSeconds,
    getLongestSong,
    getShortestSong
};