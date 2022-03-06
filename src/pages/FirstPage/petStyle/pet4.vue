<template>
  <aside class="pet4">
    <div class="pet-chat">
      <dl>
        <dt>联系方式</dt>
        <dd>QQ:2452559902</dd>
        <dt>项目地址</dt>
        <dd>https://github.com/chen-ziwen/petsystem</dd>
      </dl>
    </div>
    <aside class="pet-main">
      <header class="header">
        <div class="icon"></div>
        <p
          class="text-myself"
          :style="{ color: changeColor, textShadow: '-1px -1px 0 #fff,1px 1px 0 #333,1px 1px 0 #444' }"
        >每个人都有属于自己的一片森林，也许我们从来不曾去过，但它一直在那里，总会在那里。迷失的人迷失了，相逢的人会再相逢！</p>
      </header>
      <section class="content" :style="{ border: `5px dotted ${changeColor}` }">
        <div class="content-small">
          <p>
            构思、设计在整个项目开发过程中所花费的时间占比其实是很高的。
            因为从零构建项目需要考虑到的东西很多，像是项目的总体架构设计、工具包的选择，
            数据的获取来源都是问题并不是说我们脑子一有某个想法，我们就要立刻去实现它，这样做会导致最终的项目非常的混乱，不成系统。
            在构思与设计过程中，最让人头疼的问题其实是：我到底想要做一个什么样的项目？这个项目需要实现什么样的功能？这个项目到底能为我带来什么？基于这几个问题，我才算正式开始了本次项目的编写。
          </p>
          <p>
            做自己的项目，其实是很快乐的。不需要考虑到任何人的想法，只做自己想做的，很随性也很自由。
            当然，开发中遇到的小问题也不少，但是好在大部分问题都得到了解决，在这个解决问题的过程中，
            其实是最容易学到东西的时刻，很多以往不懂的或是很容易踩到坑的地方，都有了更加深刻的理解。
          </p>
          <p>
            至于为什么要做宠物相关的项目，我思考了很久。
            对于我来说，宠物是非常治愈，非常可爱的生物。从小到大，我养过的宠物很多很多，
            小学时期的小黑狗、三只小兔子、一只路边捡到的断尾猫咪。
            高中、大学时期，家里才算是正式养了两只小狗，一只叫做“旺旺”，一只叫做“平安”。
            为什么叫正式养呢？因为在这之前的小动物都是被人遗弃，在我妈不同意的情况下，被我偷偷捡回家的，
            所以这些小动物们最终还是回归到了流浪生活。
          </p>
            <section class="video-section">
             <video src="../../../assets/wang.mp4" controls="controls" class="video"></video>
              <span >
             旺旺和平安非常的可爱，它们活泼好动，给我们一家子带来了很多的欢乐的时光。左边的视频是“旺旺”在和螃蟹玩耍的画面。
             每次放假回家，还没走进家门口，它们就跟疯了似的跑出来又扑又舔，让人的心都酥了。相信不管是网络上，或者是现实中，
             比我更喜爱宠物的人不在少数。基于这个想法，宠物信息网站就这么诞生了。
             </span>
          </section>
          <p>
            有感而发，说多了也就不合适了，谢谢你们能看到这里。要好好爱护你们的宠物，像爱护家人一样。
          </p>
        </div>
      </section>
    </aside>
  </aside>
</template>

<script>
export default {
  name: 'pet4',
}
</script>

<style scoped>
.pet4 {
  position: relative;
  background-color: white;
  height: 100%;
  overflow: auto;
}
.pet4 .header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 220px;
  background: url("../../../assets/newsky.jpg") no-repeat;
  background-size: cover;
  /* border-bottom: 10px dotted lightblue; */
  background-color: white;
}
.pet-main {
  width: 100%;
  height: 100%;
}
.pet4 .pet-chat {
  display: block;
  position: fixed;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  width: 200px;
  height: 160px;
  background: linear-gradient(
    91deg,
    rgb(241, 238, 252, 0.6),
    rgb(157, 198, 255, 0.7) 70%,
    rgb(165, 188, 255, 0.5)
  );
  z-index: 10;
  
}
.pet4 .header .icon {
  width: 80px;
  height: 80px;
  background: url("../../../assets/cutegirl.jpg") no-repeat;
  background-size: 80px 80px;
  border-radius: 40px;
  margin-bottom: 30px;
  z-index: 10;
}
.text-myself {
  height: 50px;
  text-align: center;
  line-height: 50px;
  font: italic 700 18px "微软雅黑";
  padding:20px 50px 0px 50px;
}
.content {
  width: 80%;
  margin: 50px auto;
  background-color: whitesmoke;
  font-size: 18px;
}
.content-small {
  width: 80%;
  margin: 0 auto;
  font-family: "楷体";
  text-indent: 2em;
  letter-spacing: 1px;
  line-height: 30px;
}
.content-small > p {
  margin-top: 20px;
}
dl > dt,
dl > dd {
  text-align: center;
}
dl dd:nth-of-type(1) {
  margin-bottom: 15px;
}
dl > dt {
  margin: 10px 0px;
  font: italic 700 18px "宋体";
}
dl > dd {
  color: rgb(153, 153, 153);
  font-weight: 700;
}
.video-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.video {
  width: 220px;
  height:300px;
}
.video-section span {
  font-size: 22px;
  display: inline-block;
  font-weight: 700;
  padding-left: 40px;
}
</style>