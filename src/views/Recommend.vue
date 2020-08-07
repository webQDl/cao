<template>
  <div class="recommend">
    <div class="rec-top">
      <div class="rec-left" @click="goMy()"><i class="el-icon-arrow-left"></i>我</div>
      <div class="rec-title">推荐收录</div>
      <div class="rec-right">推荐</div>
    </div>
    <div class="rec-content">
      <div>
        <div class="rec-msg">
          <div>爱情之恋</div>
          <div class="rec-mes-dil">
            <div>系快乐我开心！</div>
            <div><img src="../assets/defaultTX.png" width="15px"  ><div class="BQ">游客</div></div>
          </div>
        </div>
        <div class="rec-mid"></div>
        <div class="dcl"><div>待处理</div></div>
      </div>
      <div>
        <div class="rec-msg">
          <div>爱情之恋</div>
          <div class="rec-mes-dil">
            <div>系快乐我开心！</div>
            <div><img src="../assets/defaultTX.png" width="15px"  ><div class="BQ">游客</div></div>
          </div>
        </div>
        <div class="rec-mid"></div>
        <div class="dcl"><div>待处理</div></div>
      </div>
      <div>
        <div class="rec-msg">
          <div>爱情之恋</div>
          <div class="rec-mes-dil">
            <div>系快乐我开心！</div>
            <div><img src="../assets/defaultTX.png" width="15px"  ><div class="BQ">游客</div></div>
          </div>
        </div>
        <div class="rec-mid"></div>
        <div class="dcl"><div>待处理</div></div>
      </div>
      <div>
        <div class="rec-msg">
          <div>爱情之恋</div>
          <div class="rec-mes-dil">
            <div>系快乐我开心！</div>
            <div><img src="../assets/defaultTX.png" width="15px"  ><div class="BQ">游客</div></div>
          </div>
        </div>
        <div class="rec-mid"></div>
        <div class="dcl"><div>待处理</div></div>
      </div>
      <div>
        <div class="rec-msg">
          <div>爱情之恋</div>
          <div class="rec-mes-dil">
            <div>系快乐我开心！</div>
            <div><img src="../assets/defaultTX.png" width="15px"  ><div class="BQ">游客</div></div>
          </div>
        </div>
        <div class="rec-mid"></div>
        <div class="dcl"><div>待处理</div></div>
      </div>
      <div>
        <div class="rec-msg">
          <div>爱情之恋</div>
          <div class="rec-mes-dil">
            <div>系快乐我开心！</div>
            <div><img src="../assets/defaultTX.png" width="15px"  ><div class="BQ">游客</div></div>
          </div>
        </div>
        <div class="rec-mid"></div>
        <div class="dcl"><div>待处理</div></div>
      </div>
      <div>
        <div class="rec-msg">
          <div>爱情之恋</div>
          <div class="rec-mes-dil">
            <div>系快乐我开心！</div>
            <div><img src="../assets/defaultTX.png" width="15px"  ><div class="BQ">游客</div></div>
          </div>
        </div>
        <div class="rec-mid"></div>
        <div class="dcl"><div>待处理</div></div>
      </div>
      <div>
        <div class="rec-msg">
          <div>爱情之恋</div>
          <div class="rec-mes-dil">
            <div>系快乐我开心！</div>
            <div><img src="../assets/defaultTX.png" width="15px"  ><div class="BQ">游客</div></div>
          </div>
        </div>
        <div class="rec-mid"></div>
        <div class="dcl"><div>待处理</div></div>
      </div>
      <div>
        <div class="rec-msg">
          <div>爱情之恋</div>
          <div class="rec-mes-dil">
            <div>系快乐我开心！</div>
            <div><img src="../assets/defaultTX.png" width="15px"  ><div class="BQ">游客</div></div>
          </div>
        </div>
        <div class="rec-mid"></div>
        <div class="dcl"><div>待处理</div></div>
      </div>
      <div>
        <div class="rec-msg">
          <div>爱情之恋</div>
          <div class="rec-mes-dil">
            <div>系快乐我开心！</div>
            <div><img src="../assets/defaultTX.png" width="15px"  ><div class="BQ">游客</div></div>
          </div>
        </div>
        <div class="rec-mid"></div>
        <div class="dcl"><div>待处理</div></div>
      </div>
      <div>
        <div class="rec-msg">
          <div>爱情之恋</div>
          <div class="rec-mes-dil">
            <div>系快乐我开心！</div>
            <div><img src="../assets/defaultTX.png" width="15px"  ><div class="BQ">游客</div></div>
          </div>
        </div>
        <div class="rec-mid"></div>
        <div class="dcl"><div>待处理</div></div>
      </div>
      <div>
        <div class="rec-msg">
          <div>爱情之恋</div>
          <div class="rec-mes-dil">
            <div>系快乐我开心！</div>
            <div><img src="../assets/defaultTX.png" width="15px"  ><div class="BQ">游客</div></div>
          </div>
        </div>
        <div class="rec-mid"></div>
        <div class="dcl"><div>待处理</div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  methods:{
    goMy(){
      this.$router.push('/my');
    }
  }
}
</script>

<style scoped>
  .rec-top{
    display: flex;
    font-size: 40px;
    padding: 30px;
    border-bottom: 1px solid #999;
  }
  .rec-left,.rec-right{
    color: rgb(73, 73, 245);
  }
  .rec-title{
    flex: 1;
    color: #000;
  }
  .rec-content>div{
    display: flex;
  }
  .rec-content>div:not(:last-of-type){
    border-bottom: 1px solid #999;
  }
  .rec-msg{
    display: flex;
    flex-direction: column;
    font-size: 40px;
    padding: 30px;
    color: #000;
    text-align: left;
  }
  .rec-mes-dil{
    display: flex;
    font-size: 35px;
    color: #999;
    margin-top: 20px;
  }
  .rec-mes-dil>div:not(:last-of-type){
    margin-right: 10px;
  }
  .dcl{
    padding: 30px;
  }
  .dcl>div{
    padding: 5px;
    font-size: 30px;
    border: 2px solid #666;
    color: #666;
    border-radius: 10px;
  }
  .rec-mid{
    flex: 1;
  }
  .BQ{
    display: inline-block;
    margin-left: 30px;
    
  }
</style>