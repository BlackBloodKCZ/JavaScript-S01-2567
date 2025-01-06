class Song {
    constructor(tilte, artist) {
        this.tilte = tilte;
        this.artist = artist;
    }
}

const mySong = new Song("Bohemian Rhapsody", "Queen");
console.log(mySong.tilte);