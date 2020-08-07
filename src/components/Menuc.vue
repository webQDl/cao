<template>
  <div class="menuc">
    <ul>
      <li @click="goExcerpt()"><i class="el-icon-edit"></i><span>摘录</span></li>
      <li><i class="el-icon-tickets"></i><span>创作</span></li>
      <li><i class="el-icon-view"></i><span>发现</span></li>
      <li><i class="el-icon-notebook-1"></i><span>文库</span></li>
      <li @click="goMy()"><i class="el-icon-user"></i><span>我</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'menuc',
  methods:{
    goExcerpt(){
      this.$router.push('/excerpt')
    },
    goMy() {
      this.$router.push('/my')
    }
  }
}
</script>

<style scoped lang="scss">
.menuc{
  position: fixed;
  height: 200px;
  bottom: 0;
  font-size: 20px;
  width: 100%;
  border-top: 1px solid #999;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
}
li {
  display: inline-block;
  flex: 1;
  display: flex;
  flex-direction: column;
}
li>i{
  font-size: 60px;
  margin-bottom: 20px;
}
</style>
