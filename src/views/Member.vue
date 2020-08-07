<template>
  <div class="member">
    <div>
      <div class="meb-top">
        <div class="meb-left" @click="fanhui()"><i class="el-icon-arrow-left"></i>返回</div>
        <div class="meb-title">会员中心</div>
        <div class="meb-right">兑换</div>
      </div>
      <div class="meb-content">
        <div class="login">
          <img src="../assets/defaultTX.png" alt="" height="50px">
          <div><div class="cName">未登录</div><div class="cIsMeb">未开通</div></div>
        </div>
        <div class="module">
          <div>
            <div>
              <div class="circleTB"><i class="el-icon-edit"></i></div>
              <div class="referral">专属字体</div>
            </div>
            <div>
              <div class="circleTB"><i class="el-icon-tickets"></i></div>
              <div class="referral">分享模板</div>
            </div>
            <div>
              <div class="circleTB"><i class="el-icon-document"></i></div>
              <div class="referral">学习计划</div>
            </div>
            <div>
              <div class="circleTB"><i class="el-icon-magic-stick"></i></div>
              <div class="referral">免广告</div>
            </div>
          </div>
          <div>
            <div>
              <div class="circleTB"><i class="el-icon-present"></i></div>
              <div class="referral">练字模式</div>
            </div>
            <div>
              <div class="circleTB"><i class="el-icon-search"></i></div>
              <div class="referral">高级搜索</div>
            </div>
            <div>
              <div class="circleTB"><i class="el-icon-headset"></i></div>
              <div class="referral">原始音质</div>
            </div>
            <div>
              <div class="circleTB"><i class="el-icon-paperclip"></i></div>
              <div class="referral">会员徽章</div>
            </div>
          </div>
        </div>
        <div class="meb-long">
          <div><div class="time">1个月</div><div class="mev-long-right"><div class="price"></div><div class="price2">￥6.00</div><el-button type="danger" round>开通</el-button></div></div>
          <div><div class="time">2个月</div><div class="mev-long-right"><div class="price">￥36.00</div><div class="price2">￥30.00</div><el-button type="danger" round>开通</el-button></div></div>
          <div><div class="time">3个月</div><div class="mev-long-right"><div class="price">￥72.00</div><div class="price2">￥50.00</div><el-button type="danger" round>开通</el-button></div></div>
        </div>
        <div class="meb-func">
          <div class="funct">会员功能</div>
          <div>
            <div class="func-title">更多搜索结果</div>
            <div><img src="../assets/member1.png" width="100%" alt=""></div>
          </div>
          <div>
            <div class="func-title">更多分享模板</div>
            <div><img src="../assets/member2.png" width="100%" alt=""></div>
          </div>
          <div>
            <div class="func-title">更多学习计划</div>
            <div><img src="../assets/member3.png" width="100%" alt=""></div>
          </div>
            <div class="func-title">表达您的喜爱与支持</div>
            <div><i class="el-icon-wallet"></i></div>
            <div class="func-end">更多会员功能即将到来</div>
          </div>
        </div>
      <div class="meb-bottom">
        <div class="explain-title">会员说明：</div>
        <div class="explain-content">
          <ul>
            <li>会员服务开通后不支持退款</li>
            <li>会员服务开通没用生效，请重新打开西窗烛app</li>
            <li>若重启后还无法解决问题，请将付款凭证截图、用户名发送至hi@xcz.im</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Member',
  methods:{
    fanhui(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="scss">
  .meb-top{
    display: flex;
    font-size: 50px;
    padding: 30px;
  }
  .meb-left,.meb-right{
    color: rgb(73, 73, 245);
  }
  .meb-title{
    flex: 1;
    color: #000;
  }
  .meb-content{
    display: flex;
    flex-direction: column;
  }
  .login,.module,.meb-long{
    padding: 30px;
  }
  .meb-func{
    background: rgb(173, 18, 18);
  }
  .login{
    display: flex;
    align-items: center;
  }
  .login>div{
    margin: 20px 30px;
    text-align: left;
  }
  .cName{
    color: #000;
    font-size: 50px;
  }
  .cIsMeb{
    color: rgb(177, 125, 125);
    font-size: 35px;
  }

  .module{
    margin-top: 50px;
  }
  .module>div{
    display: flex;
  }
  .module>div>div{
    flex: 1;
    font-size: 25px;
    color: #000;
    height: 250px;
  }
  .circleTB{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgb(184, 160, 160);
    font-size: 90px;
    color: rgb(109, 46, 46);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 35px;
    margin-bottom: 30px;
  }

  .meb-long>div{
    display: flex;
    padding: 50px 0;
  }
  .meb-long>div:not(:last-of-type){
    border-bottom: 1px solid #eee;
  }
  .meb-long>div>div{
    flex:1;
    font-size: 40px;
  }
  .mev-long-right{
    display: flex;
  }
  .mev-long-right>div{
    flex:1;
  }
  .time{
    color: #000;
    font-weight: 500;
    display: flex;
    justify-content: left;
  }
  .price{
    color: #999;
    text-decoration: line-through;
  }
  .price2{
    color: rgb(112, 19, 19);
  }

  .meb-func{
    padding: 0 150px;
    color: #FFF;
  }
  .funct{
    margin: 80px;
    font-size: 50px;
  }
  .func-title{
    margin: 50px 0;
    font-size: 35px;
  }
  .func-end{
    color: grey;
    font-size: 35px;
    padding: 100px 0 30px 0;
  }


  .meb-bottom{
    background: #eeeeee;
    text-align: left;
    padding: 30px;
  }
  .explain-title{
    font-size: 40px;
    color: rgb(105, 111, 116);
  }  
  .explain-content{
    font-size: 30px;
    color: rgb(171, 179, 184);
  }
</style>
