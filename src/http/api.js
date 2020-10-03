/**
 * 接口文档
 * 按需导出接口
 */

import axios from './axios';
import { formatSong } from '@/utils/songs.js';

// axios.defaults.baseURL = "http://localhost:3000"

const API = {
  search: '/search', //搜索歌曲
  playlistDetail: '/playlist/detail', //歌单详情
  musicUrl: '/song/url', //歌曲 url
  liric: '/lyric', //歌词
  songDetail: '/song/detail', //歌曲详情
  checkMusic: '/check/music', //检查音乐是否可用
  searchHot: '/search/hot', //热搜
  userPlaylist: '/user/palylist', // 用户播放列表
  toplistDetail: '/toplist/detail', //排行榜
  personalized: '/personalized' //热门推荐歌单
};

export function search() {
  return axios.get(API.search);
}

export function getPlaylistDetail(id) {
  return new Promise(resolve => {
    axios
      .get(API.playlistDetail, {
        params: {
          id
        }
      })
      .then(({ playlist }) => playlist)
      .then(playlist => {
        let { tracks, trackIds } = playlist;
        // 未登录时 获取的歌单 tracks 不全，但 trackids 比较全
        // 这时可以通过 trackids 获取所有歌单的详情
        if (tracks.length !== trackIds.length) {
          // 限制歌单最多 500 首
          const ids = trackIds.slice(0, 500).map(x => x.id).toString();
          getSongDetail(ids).then(({ songs }) => {
            playlist.tracks = songs.map(song => formatSong(song));

            resolve(playlist);
          });
        } else {
          playlist.tracks = tracks.map(song => formatSong(song));
          resolve(playlist);
        }
      });
  });
}

export function getMusicUrl() {
  return axios.get(API.musicUrl);
}

export function getLiric() {
  return axios.get(API.liric);
}

// 说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(注意:歌曲封面现在需要通过专辑内容接口获取)

export function getSongDetail(ids) {
  return axios.get(API.songDetail, {
    params: {
      ids
    }
  });
}

export function checkMusic() {
  return axios.get(API.checkMusic);
}

export function searchHot() {
  return axios.get(API.searchHot);
}

export function getUserPlaylist() {
  return axios.get(API.userPlaylist);
}

export function getToplistDetail() {
  return axios.get(API.toplistDetail);
}

export function getPersonalized() {
  return axios.get(API.personalized);
}
