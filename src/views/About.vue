<template>
  <div class="about">
    <div class="abt-top">
      <div>
        <div class="abt-left" @click="goMy()"><i class="el-icon-arrow-left"></i>我</div>
        <div class="abt-title"><div class="icon-c">窗</div><div class="xcz-title">西窗烛</div><div class="verson">v4.15.1</div></div>
        <div class="abt-right"></div>
      </div>
    </div>

    <div class="abt-page">
      <div>
        <div class="shi-verse">
          何当共剪西窗烛，<br>
          却话巴山夜雨时。
        </div>
        <div class="shi-author">-[唐]李商隐</div>
      </div>
    </div>

    <div class="abt-msg">
      <div class="abt-msg-1">
        大江东去的豪放明快、低头弄梅的婉媚曲折...
      </div>
      <div class="abt-msg-2">
        <div>投资合作：</div>
        <div>16135020（微信/QQ）</div>
      </div>
      <div class="abt-msg-3">
        <div>微信公众号：</div>
        <div>西窗烛App</div>
      </div>
      <div class="abt-msg-3">
        <div>官方微博：</div>
        <div>西窗烛</div>
      </div>
      <div class="abt-msg-3">
        <div>官方网站：</div>
        <div>xcz.im</div>
      </div>
      <div class="abt-msg-3">
        <div>QQ公众号：</div>
        <div>133575768</div>
      </div>
      <div class="abt-msg-3">
        <div>邮箱联系：</div>
        <div>hi@xcz.im</div>
      </div>
    </div>

    <div class="abt-func">
      <div>
        <div><div>服务协议</div><div class="abt-func-mid"></div><div><i class="el-icon-arrow-right"></i></div></div>
        <div><div>隐私协议</div><div class="abt-func-mid"></div><div><i class="el-icon-arrow-right"></i></div></div>
      </div>
      <div>
        <div><div>意见反馈</div><div class="abt-func-mid"></div><div><i class="el-icon-arrow-right"></i></div></div>
        <div><div>推荐给朋友</div><div class="abt-func-mid"></div><div><i class="el-icon-arrow-right"></i></div></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'About',
  methods:{
    goMy(){
      this.$router.push('/my');
    }
  }
}
</script>

<style scoped>
  .abt-top{
    width: 100%;
    position: fixed;
    top: 0;
  }
  .abt-top>div{
    display: flex;
    align-items: center;
    border-bottom: 0.01rem solid #999;
    padding: 30px 0;
    background: #fff;
    height: 60px;
  }
  .abt-left{
    font-size: 40px;
    color: rgb(92, 126, 228);
  }
  .abt-title{
    flex: 1;
  }
  .abt-title>div{
    display: inline-block;
  }
  .icon-c{
    padding: 0 10px;
    background: rgb(78, 11, 11);
    font-size: 40px;
    color: #fff;
  }
  .xcz-title{
    color: #000;
    font-size: 40px;
    font-weight: 700;
  }
  .verson{
    font-size: 30px;
    color: #999;
  }

  .abt-page{
    margin-top: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px;
    background: #cccaca;
  }
  .abt-page>div{
    width: 100%;
  }
  .shi-verse{
    font-size: 50px;
  }
  .shi-author{
    font-size: 35px;
    text-align: right;
  }
  .abt-msg{
    margin: 30px 0;
  }
  .abt-msg>div{
    padding: 0px 30px 40px 30px;
    text-align: left;
    font-size: 40px;
    background: #fff;
  }

  .abt-func{
    background: #cccaca;
  }
  .abt-func>div{
    padding-top: 60px;
  }
  .abt-func>div>div:not(:last-of-type){
    border-bottom: 1px solid #cccaca;
  }
  .abt-func>div>div{
    display: flex;
    background: #fff;
    font-size: 40px;
    padding: 30px;
  }
  .abt-func-mid{
    flex: 1;
  }
</style>