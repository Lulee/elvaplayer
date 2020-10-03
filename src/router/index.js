import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import RecommendMusic from '@/views/recommend/RecommendMusic.vue';
import TopList from '@/views/topList/TopList.vue';
import PlayList from '@/views/playList/PlayList';
import PlayListDetail from '@/views/playListDetail/PlayListDetail'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'recommend',
    component: RecommendMusic,
    children: [
      {
        path: '/recommend'
      },
      {
        path: '/recommend/topList',
        component: TopList
      },
      {
        path: '/recommend/playList',
        component: PlayList
      }
    ]
  },
  {
    path: '/playListDetail',
    component:PlayListDetail
  },
  {
    path: '/myMusic',
    name: 'MyMusic',
    component: () => import('../views/MyMusic.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
