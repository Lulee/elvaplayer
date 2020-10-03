import {toHttps} from './utils'

export class Song {
  constructor({ id, name, duration, singer, album, image, url }) {
    // arguments.keys.forEach(key => {
    //   this[key] = arguments[key];
    // });
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.singer = singer;
    this.album = album;
    this.image = image;
    this.url = url;
  }
}

function filterSinger(singers){
    return singers.map(singer=>singer.name).join('/');
}

export function formatSong(song){
    return new Song({
        id: song.id,
        name: song.name,
        singer: song.ar.length > 0 && filterSinger(song.ar),
        album: song.al.name,
        image: toHttps(song.al.picUrl),
        duration: song.dt / 1000,
        url: `https://music.163.com/song/media/outer/url?id=${song.id}.mp3`
      })
}

