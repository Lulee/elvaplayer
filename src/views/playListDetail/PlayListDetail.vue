<template>
  <div class="playlistDetail">
    <!-- <h1>this is palylistdetail page</h1>
        <h3>传进来的查询参数：{{$route.query.id}}</h3> -->
    <div v-if="playList.length > 0">
      <h1>歌曲列表 {{ playList.length }}首歌</h1>
      <div class="list-item" v-for="item in playList" :key="item.id">
        <span class="name">{{item.name}}</span>
      </div>
    </div>
    <div v-else><h1>没有歌曲</h1></div>
  </div>
</template>

<script>
import { getPlaylistDetail } from '@/http/api.js';
export default {
  name: 'PlaylistDetail',
  data() {
    return {
      playList: []
    };
  },
  created() {
    const id = this.$route.query.id;
    getPlaylistDetail(id).then(res => {
      this.playList = res.tracks;
    });
  }
};
</script>
