//Exercise 40 Music Album

function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}
const album1 = make_album("Ali Zafar", "Album1", 14);
const album2 = make_album("Atif Asalam", "Album2", 12); 
const album3 = make_album("Rahat Fatheh Ali Khan", "Album3", 8); 

console.log(album1);
console.log(album2);
console.log(album3);

