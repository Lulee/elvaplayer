<template>
   <el-container id ="app">
    <el-header class="app-header">
      <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#242424"
      text-color="#EFEFEF"
      active-text-color="#EFEFEF"
      router
    >
  
      <el-menu-item index="/">发现音乐
      </el-menu-item>
      <el-menu-item index="/myMusic">我的音乐</el-menu-item>
    </el-menu>

  
    </el-header>
    <el-main class="app-main">
        <router-view></router-view>
    </el-main>
    <el-footer class="app-footer">
      this id footer
    </el-footer>
   </el-container>

</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/'
    };
  },
  methods: {
    handleSelect(key,keyPath){
      console.log(key,keyPath);
    }
  }
};
</script>
<style lang="less">
#app,.app-header,.app-main{
  padding: 0;
  margin: 0;
}

</style>

