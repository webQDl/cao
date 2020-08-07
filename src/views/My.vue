<template>
  <div class="my">
    <div class="m">
      <div class="m-top">
          <div class="m-top-left"></div>
          <div class="m-top-center">我</div>
          <div class="m-top-right">
              <ul>
                  <li><i class="el-icon-headset"></i></li>
                  <li><i class="el-icon-setting"></i></li>
              </ul>
          </div>
      </div>
      <div class="m-content">
          <div class="login">
            <div @click="goLogin()">
              <div class="login-left">
                <img src="../assets/defaultTX.png" alt="" height="50px">
                <div>登录/注册</div>
              </div>
              <div class="moreTB"><i class="el-icon-arrow-right"></i></div>
            </div>
          </div>
          <div class="inform">
            <div>
              <div>通知私信</div>
              <div class="moreTB"><i class="el-icon-arrow-right"></i></div>
            </div>
            <div>
              <div>西窗市集</div>
              <div class="moreTB"><i class="el-icon-arrow-right"></i></div>
            </div>
            <div>
              <div>西窗时间</div>
              <div class="moreTB"><i class="el-icon-arrow-right"></i></div>
            </div>
          </div>
          <div class="night">
            <div>
              <div>夜间模式</div>
              <div class="moreTB">
                <el-tooltip :content="'Switch value: ' + value" placement="top">
                  <el-switch
                    v-model="value"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-value="20"
                    inactive-value="0">
                  </el-switch>
                </el-tooltip>
              </div>
            </div>
          </div>
          <div class="price">
            <div>
              <div>我的钱包</div>
              <div class="moreTB"><i class="el-icon-arrow-right"></i></div>
            </div>
            <div @click="goMember()">
              <div>会员中心</div>
              <div class="moreTB"><i class="el-icon-arrow-right"></i></div>
            </div>
          </div>
          <div class="about">
            <div @click="goRecommend()">
              <div>推荐收录</div>
              <div class="moreTB"><i class="el-icon-arrow-right"></i></div>
            </div>
            <div @click="goAbout()">
              <div>关于我们</div>
              <div class="moreTB"><i class="el-icon-arrow-right"></i></div>
            </div>
          </div>
      </div>
    </div>
    <menuc />
  </div>
</template>

<script>
// @ is an alias to /src
import menuc from '@/components/Menuc.vue'

export default {
  name: 'My',
  data() {
    return{
      value: '20'
    }
  },
  components: {
    menuc
  },
  methods: {
    goMember(){
      this.$router.push('/member');
    },
    goRecommend(){
      this.$router.push('/recommend');
    },
    goAbout(){
      this.$router.push('/about');
    },
    goLogin(){
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
  
  .m-content>div{
    margin: 50px 0;
    font-size: 40px;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
  }
   .m-content>div>div{
    display: flex;
    padding: 25px;
    align-items: center;
  }
  .m-content>div>div:not(:last-of-type){
    border-bottom: 1px solid rgb(224, 221, 221);
  }
  .login-left{
    display: flex;
    align-items: center;
  }
  .login-left>div{
    margin-left: 40px;
  }
  .moreTB{
    position: absolute;
    right: 50px;
  }
  .el-switch{
    width: 50px;
    line-height: 50px;
  }
  .el-switch__core{
    width: 50px;
    height: 50px;
  }
  .m-content{
    background: rgb(247, 245, 245);
    flex: 1;
    height: 1420px;
  }
  .m{
    display: flex;
    flex-direction: column;
    margin-bottom: 200px;
  }
  .m-content>div{
    background: #fff;
  }
  .my{
    position: relative;
  }
  .m-top{
    display: flex;
    align-items: center;
    font-size: 40px;
    border-bottom: 1px solid #999;
  }
  .m-top-left{
    flex: 1;
  }
   .m-top-center{
    flex: 1;
    color: #000;
  }
  .m-top-right{
    flex: 1;
  }
  .m-top-right>ul{
    display: flex;
    list-style: none;
    padding: 0;
    float: right;
  }
  .m-top-right>ul>li{
    margin: 0 25px;
  }
  .m-top-right>ul>li>i{
    font-size: 55px;
  }
</style>
