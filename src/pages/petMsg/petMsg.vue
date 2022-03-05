<template>
  <div class="petMsg">
    <PmsgHeader title="宠物查询" place='请输入宠物全名'></PmsgHeader>

    <article class="pmsgart">
      <h2 :style="{border:`4px dotted ${changeColor}`}">基本信息栏</h2>
      <div class="pmsbasic">
        
        <ul class="ul1">
          <li><span>种类:</span>{{Tnewslist.name}}</li>
          <li><span>寿命:</span>{{Tnewslist.life}}</li>
          <li><span>价格:</span>{{Tnewslist.price}}</li>
        </ul>

        <ul class="ul2">
          <li><span>英文名:</span>{{Tnewslist.engName}}</li>
          <li><span>祖籍:</span>{{Tnewslist.nation}}</li>
          <li><span>性格:</span>{{Tnewslist.characters}}</li>
        </ul>

        <img :src="Tnewslist.coverURL" alt="图片加载失败" class="petshow">

      </div>

      <div class="pmsintroduce">
        <h2 :style="{border:`4px dotted ${changeColor}`}">特征介绍</h2>
        <div class="ps">
          <p>{{Tnewslist.feature}}</p>
          <p>{{Tnewslist.characterFeature}}</p>
          <p>{{Tnewslist.careKnowledge}}</p>
        </div>
      </div>
    </article>

  </div>
</template>

<script>
  import PmsgHeader from '@/components/petMsgTotal/PmsgHeader.vue'
  export default {
    name: 'petMsg',
    components: {
      PmsgHeader,
    },
    data() {
      return {
        show: '我是宠物信息',
        Msgs: '',
        Tnewslist: {
          name: '哈士奇',
          characters : '聪明机灵、极度热情、神经质',
          coverURL: "http://img.boqiicdn.com/Data/BK/P/imagick14371435571930.png", //需要用到require引入
          careKnowledge: '哈士奇虽然看着一副冷漠无情的样子，事实上，哈士奇对人很友好、温柔、热情的。喜欢与人交往是哈士奇的典型性格。通常不表现出护卫犬强烈的领地占有欲，不对陌生人过多的怀疑，也不会攻击其他犬类。因此有很多人喜欢哈士奇。他对主人非常忠诚，一条忠诚的小狗有一个健康的身体是非常重要的。',
          engName: 'Siberian Huskiy',
          life: '9-15年',
          price: '2000-4000元',
          nation: '俄罗斯',
          characterFeature: '哈士奇的外表英俊潇洒，精致的五官和丰富的肢体语言充满了奇特的表现，无需复杂的交谈，就能轻易了解他的喜怒哀乐。哈士奇时常会有点神经质。',
          feature : '西伯利亚雪橇犬是一种原始的古老犬种，因它的独特嘶哑的叫声被称之为当今的哈士奇。'
        }
      }
    },

    
    mounted() {
      this.$bus.$on('sendMsgs', (msg) => {
        // let resnew = response.data.newslist[0]
        let resnew = msg[0];
        
        //遍历对象，如果对象中对应的值为空，则把空改为不详
        Object.keys(resnew).forEach(function (key) {
          if(resnew[key]=='') {
            resnew[key] = '不详'
          }
        });
        resnew.careKnowledge = resnew.careKnowledge.replace(/\s*/g,'')
        resnew.characterFeature = resnew.characterFeature.replace(/\s*/g,'')
        resnew.feature = resnew.feature.replace(/\s*/g,'')
         this.Tnewslist = resnew;
        // coverURL 图片 careKnowledge 百科 characterFeature engName 
        // 英文名 life 寿命 name 名称 price 价格 nation 国家 characters 性格 feature
      })
    },
    
    beforeDestroy() {
      this.$bus.$off('sendMsgs')
    }

  }
</script>

<style scoped>
    
  .pmsgart {
    height: calc(82vh - 70px);
    background-color: white;
    overflow: auto;
  }

  .pmsgart .pmsbasic {
    height: 290px;

  }
 .pmsgart .ul2 {
   transform: translateX(-140px);
 }
  .pmsgart .pmsbasic ul li {
    font: normal 400 20px "微软雅黑";
    color: rgba(100, 100, 100);
    width: 300px;
    margin-bottom: 30px;
  }

  .pmsgart .pmsbasic ul li span {
    font: normal 700 22px "黑体";
    color: black;
  }

  .pmsgart h2 {
    text-align: center;
    margin-bottom: 15px;
    color: mediumblue;
    background-color: white;
    padding-top: 8px;
    letter-spacing: 5px;
    line-height: 55px;
    margin: 0px;
    padding: 0px;

  }
  .pmsbasic {
    display: flex;
    justify-content:space-around;
    align-items: center;
    flex-wrap: nowrap;
  }
  .petshow {
    width: 370px;
    height: 250px;
  }

  .ps p {
    display: block;
    padding: 25px;
    line-height: 35px;
    letter-spacing: 2px;
    text-indent: 2em;
    color: rgba(0, 0, 0);
    text-align: start;
    font:22px '黑体' ;
    margin-left: 50px;
  }
</style>