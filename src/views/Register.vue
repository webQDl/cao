<template>
  <div class="register">
    <div class="reg-top">
      <div>
        <div class="reg-left" @click="goReturn()"><i class="el-icon-arrow-left"></i>我</div>
        <div class="reg-title">注册</div>
        <div class="reg-right"></div>
      </div>
    </div>

    <div class="reg-content">
      
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Register',
  methods:{
    goReturn(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
  .reg-top{
    width: 100%;
    position: fixed;
    top: 0;
  }
  .reg-top>div{
    display: flex;
    align-items: center;
    border-bottom: 0.01rem solid #999;
    padding: 30px 0;
    background: #fff;
    height: 60px;
  }
  .reg-left{
    font-size: 40px;
    color: rgb(92, 126, 228);
  }
  .reg-title{
    flex: 1;
  }
</style>