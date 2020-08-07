<template>
  <div class="excerpt">
    <div class="exc">
      <div class="exc-top">
          <div class="exc-top-left">全部</div>
          <div class="exc-top-right">
              <ul>
                  <li><i class="el-icon-search"></i></li>
                  <li @click="goLogin()"><i class="el-icon-user"></i></li>
                  <li><i class="el-icon-upload"></i></li>
                  <li><i class="el-icon-more-outline"></i></li>
              </ul>
          </div>
      </div>
      <div class="exc-content">
        <div class="page" @click="detailPage()">
          <div class="pageAuther">李白<div class="icon-c">窗</div></div>
          <div class="pageVerse">事 深<br>了 藏<br>拂 身<br>衣 与<br>去 名</div>
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
  name: 'Excerpt',
  components: {
    menuc
  },
  methods: {
    detailPage(){
      this.$router.push({path:'/excerptDeil'})
    },
    goLogin(){
      this.$router.push({path:'/login'})
    }
  }
}
</script>

<style scoped>
  .exc-content{
    flex: 1;
    background: rgb(247, 245, 245);
    display: flex;
    align-items: center;
    justify-content: center;  
    height: 1420px;
  }
  .page{
    width: 80%;
    height: 70%;
    position: relative;
  }
  .pageAuther{
    width: 80px;
    position: absolute;
    left: 50px;
    bottom: 50px;
  }
  .pageVerse{
    text-align: right;
    padding: 50px;
  }
  .exc{
    display: flex;
    flex-direction: column;
    margin-bottom: 200px;
  }
  .exc-content>div{
    background: #fff;
  }
  .excerpt{
    position: relative;
  }
  .exc-top{
    display: flex;
    align-items: center;
    font-size: 40px;
    border-bottom: 1px solid #999;
  }
  .exc-top-left{
    flex: 1;
  }
  .exc-top-right{
    flex: 5;
  }
  .exc-top-right>ul{
    display: flex;
    list-style: none;
    padding: 0;
    float: right;
  }
  .exc-top-right>ul>li{
    margin: 0 25px;
  }
  .exc-top-right>ul>li>i{
    font-size: 50px;
  }
  .icon-c{
    font-weight: 100;
    margin-top: 40;
    display: inline-block;
    padding: 0 15px;
    background: rgb(129, 43, 43);
    border-radius: 15px;
    color: #FFF;
  }
</style>
