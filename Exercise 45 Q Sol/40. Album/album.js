//Exercise 40 Music Album
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Ali Zafar", "Album1", 14);
var album2 = make_album("Atif Asalam", "Album2", 12);
var album3 = make_album("Rahat Fatheh Ali Khan", "Album3", 8);
console.log(album1);
console.log(album2);
console.log(album3);
