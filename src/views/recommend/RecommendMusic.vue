<template>
  <div class="recommend">
    <!-- 第一层导航 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#C01119"
      text-color="#EFEFEF"
      active-text-color="#EFEFEF"
      router
    >
      <el-menu-item index="/recommend">推荐</el-menu-item>
      <el-menu-item index="/recommend/topList">排行榜</el-menu-item>
      <el-menu-item index="/recommend/playList">歌单</el-menu-item>
    </el-menu>

    <el-main class="recommend-main">
      <div class="recommend-content">
        <div v-if="activeIndex === '/recommend'">
          <!-- 跑马灯 -->
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
          <!-- 第二层导航 -->
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            router
          >
            <el-menu-item index="1">热门推荐</el-menu-item>
            <el-menu-item index="2">华语</el-menu-item>
            <el-menu-item index="3">流行</el-menu-item>
            <el-menu-item index="4">摇滚</el-menu-item>
            <el-menu-item index="5">民谣</el-menu-item>
            <el-menu-item index="5">电子</el-menu-item>
          </el-menu>
          <div class="line"></div>
          <!-- 歌单 -->
          <div class="recommend-list">
            <div class="list-item" v-for="item in recommendList" :key="item.id">
              <router-link class="item-link" :to="{ path: '/playListDetail', query: { id: item.id }}">
                <img class="link-image" :src="item.picUrl" />
                <h3 class="link-name">{{ item.name }}</h3>
              </router-link>
            </div>
          </div>
        </div>
        <!-- 导航出口 -->
        <router-view></router-view>
      </div>
      <!-- 左边部分 -->
      <div class="recommend-nav"></div>
      <!-- 右边部分 -->
      <div class="recommend-ads"></div>
    </el-main>
  </div>
</template>

<script>
import { getPersonalized } from '@/http/api.js';
export default {
  name: 'RecommendMusic',
  data() {
    return {
      activeIndex: '/recommend',
      recommendList: []
    };
  },
  created() {
    getPersonalized().then(res => {
      this.recommendList = res.result;
    });
  },
  methods: {
    handleSelect(path) {
      console.log(path);
      this.activeIndex = path;
    }
  }
};
</script>

<style lang="less">
.el-menu--horizontal>.el-menu-item,.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 0px solid transparent;
}

.recommend-main {
    margin:0;
    padding:0;
  display: flex;
  flex: 1;
  .recommend-content {
    flex: 1;
  }
  .recommend-nav,
  .recommend-ads {
    flex: 0 0 10vw;
    background-color: #f5f5f5;
  }
  .recommend-nav {
    order: -1;
  }
}

.el-carousel__item {
  /* width: 80vw;
  display:absolute;
  left:50%;
  transform:translateX(-50%); */
  h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0 auto;
  }

  &:nth-child(2n) {
    background-color: #99a9bf;
  }

  &:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}

.el-row {
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: '';
  }

  .clearfix:after {
    clear: both;
  }
}

.recommend-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  .list-item {
    flex: 0 0 20%;
    height: 100px;
    margin:10px;
    .item-link {
      text-decoration: none;
      .link-image {
        width: 90%;
        height: 60px;
      }
      .link-name {
        font-size: 14px;
        line-height: 20px;
        word-wrap:break-word;
        color:black;
      }
    }
  }
}
</style>
