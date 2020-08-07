<template>
  <div class="login">
    <div class="lgn-top">
      <div>
        <div class="lgn-left" @click="goReturn()"><i class="el-icon-arrow-left"></i>我</div>
        <div class="lgn-title">登录</div>
        <div class="lgn-right" @click="goReg()">注册</div>
      </div>
    </div>

    <div class="lgn-content">
      
    </div>

    <div class="lgn-third">
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Login',
  methods:{
    goReturn(){
      this.$router.go(-1);
    },
    goReg(){
      this.$router.push('/register');
    }
  }
}
</script>

<style scoped>
  .lgn-top{
    width: 100%;
    position: fixed;
    top: 0;
  }
  .lgn-top>div{
    display: flex;
    align-items: center;
    border-bottom: 0.01rem solid #999;
    padding: 30px 0;
    background: #fff;
    height: 60px;
  }
  .lgn-left{
    font-size: 40px;
    color: rgb(92, 126, 228);
  }
  .lgn-title{
    flex: 1;
  }
</style>