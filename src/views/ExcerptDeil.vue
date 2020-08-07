<template>
  <div class="excerptDeil">
    <div class="excD">
      <div class="excD-top">
          <div class="exDc-top-left" @click="fanhui()"><i class="el-icon-arrow-left"></i>返回</div>
          <div class="excD-top-right">
              <ul>
                  <li><i class="el-icon-document-copy"></i></li>
                  <li><i class="el-icon-search"></i></li>
                  <li><i class="el-icon-headset"></i></li>
                  <li><i class="el-icon-upload"></i></li>
                  <li><i class="el-icon-more-outline"></i></li>
              </ul>
          </div>
      </div>
      <div class="excD-content">
        <div class="verse">
            <div class="v-title">侠客行</div>
            <div>[唐]李白</div>
            <div>赵客缦胡缨，吴钩霜雪明。 </div>
            <div>银鞍照白马，飒沓如流星。 </div>
            <div>十步杀一人，千里不留行。 </div>
            <div class="active">事了拂衣去，深藏身与名。 </div>
            <div>闲过信陵饮，脱剑膝前横。 </div>
            <div>将炙啖朱亥，持觞劝侯嬴。 </div>
            <div>三杯吐然诺，五岳倒为轻。 </div>
            <div>眼花耳热后，意气素霓生。 </div>
            <div>救赵挥金槌，邯郸先震惊。</div>
        </div>
      </div>
      <div class="pingjia">
        <div class="introduce verseD-title">
          <div class="active">评析</div>
          <div>注解</div>
          <div>译文</div>
          <div>赏析</div>
        </div>
        <div class="introduce-content content-box">
          《侠客行》是唐代伟大诗人李白创作的一首描写和歌颂侠客的古体五言诗。此诗前四句从侠客的装束、兵刃、坐骑描写侠客的外貌；第二个四句写侠客高超的武术和淡泊名利的行藏；第三个四句引入信陵君和侯嬴、朱亥的故事来进一步歌颂侠客，同时也委婉地表达了自己的抱负，侠客得以结识明主，明主借助侠客的勇武谋略去成就一番事业，侠客也就功成名就了；最后四句表示，即使侠客的行动没有达到目的，但侠客的骨气依然流芳后世，并不逊色于那些功成名就的英雄。全诗抒发了他对侠客的倾慕，对拯危济难、用世立功生活的向往。
        </div>

        <div class="author verseD-title">
          <div class="active">作者</div>
          <div class="more">更多<i class="el-icon-arrow-right"></i></div>
        </div>
        <div class="author-content content-box">
          李白，字太白，号青莲居士，唐朝诗人，有‘诗仙’之称，伟大的浪漫主义诗人
        </div>
        
        <div class="fair verseD-title">
          <div class="active">市集</div>
          <div class="more">更多<i class="el-icon-arrow-right"></i></div>
        </div>
        <div class="fair-content content-box">
          <img src="../assets/fair.png" height="100px">
        </div>
        
        <div class="excerpt verseD-title">
          <div class="active">摘录</div>
          <div class="more">更多<i class="el-icon-arrow-right"></i></div>
        </div>
        <div class="excerpt-content content-box">
          <div>银鞍照白马，飒沓如流星。</div>
          <div>事了拂衣去，深藏身与名。</div>
          <div>十步杀一人，千里不留行。</div>
        </div>
        
        <div class="voice verseD-title">
          <div class="active">语音</div>
          <div class="more">更多<i class="el-icon-arrow-right"></i></div>
        </div>
        <div class="voice-content content-box">
          <div>
            <div class="voice-title">
              <img src="../assets/yytx.png">
              <div><div class="txName">sinvy</div><div>三年前</div></div>
            </div>
            <div class="voice-content">
              <img src="../assets/vedio.png" height="80px">
            </div>
          </div>
          <div>
            <div class="voice-title">
              <img src="../assets/yytx.png">
              <div><div class="txName">风荷舞</div><div>三年前</div></div>
            </div>
            <div class="voice-content">
              <img src="../assets/vedio.png" height="80px">
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Excerpt',
  methods:{
    fanhui(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
  .voice-content{
    margin-top: 25px;
  }
  .txName{
    font-size: 40px;
    font-weight: 700;
    color: #000;
    margin-bottom: 15px;
  }
  .voice-title{
    display: flex;
  }
  .pingjia{
    margin-top: 80px;
  }
  .verseD-title>.active{
    color: rgb(168, 35, 35);
  }
  .verseD-title{
    color: rgb(97, 84, 84);
    display: flex;
    font-size: 40px;
    margin: 25px 0;
  }
  .content-box{
    font-size: 28px;
    text-align: left;
  }
  .more{
    color: #666;
    position: absolute;
    right: 15px;
    font-size: 28px;
  }
  .introduce>div{
    margin-right: 25px;
  }
  .verse{
    font-size: 40px;
    font-weight: 400;
  }
  .verse>div{
    margin: 15px 0;
  }
  .verse .active{
    font-weight: 700;
  }
  .v-title{
    font-size: 42px;
  }
  .excD-content{
    flex: 1;
    margin-top: 80px;
  }
  .excD{
    display: flex;
    flex-direction: column;
    height: 550px;
  }
  .excD-content>div{
    background: #fff;
  }
  .excerptDeil{
    position: relative;
  }
  .excD-top{
    display: flex;
    padding: 50px 0;
    align-items: center;
    border-bottom: 1px solid #999;
    font-size: 40px;
  }
  .excD-top-left{
    flex: 2;
  }
  .excD-top-right{
    flex: 8;
  }
  .excD-top-right>ul{
    display: flex;
    list-style: none;
    padding: 0;
    float: right;
  }
  .excD-top-right>ul>li{
    margin: 0 25px;
  }
  .excD-top-right>ul>li>i{
    font-size: 50px;
  }
  .icon-c{
    font-weight: 100;
    margin-top: 42px;
    display: inline-block;
    padding: 0 15px;
    background: rgb(129, 43, 43);
    border-radius: 15px;
    color: #FFF;
  }
</style>
