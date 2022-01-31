// import axios from 'axios';
// export const petApi = {
// methods : {
//     //获取豆瓣的一些资源
//     movie(movie,range,start) {
//       // axios.get(`/j/new_search_subjects?sort=${movie}&range=${range}&tags=%E5%AE%A0%E7%89%A9&start=${start}`)
//       axios.get('/j/new_search_subjects',{
//         params:{
//           tags : '宠物',
//           sort: movie,
//           range:range,
//           start: start
//         }
//       }).then(
// 					response => {
// 						//response.data 拿到接口里的所有内容
//             console.log('哈哈哈请求成功',response.data.data)
//             this.$bus.$emit('sendmovie',response.data.data)
//             if(response == undefined) {
//              this.$message({
//                         // showClose: true,
//                         message: ' 抱歉，没有找到该宠物的信息。请确认是否输入正确的宠物名称！',
//                         type: 'warning',
//                         duration : 3000,
//                         showClose: true,
//                     });
//             }
//             else {
//               this.$message({
//                         // showClose: true,
//                         message: ' 已为您找到如下信息！',
//                         type: 'success',
//                         duration : 2000,
//                         showClose: true,
//                     });
//             }
//            //杜宾、贵宾、哈士奇、苏格兰折耳猫、卡斯罗犬、大丹犬、暹罗猫、阿拉斯加雪橇犬、美国可卡犬、金毛犬、布偶猫
// 						//请求成功后更新List的数据
						
//             this.Msgs = ''
// 					},
// 					error => {()=>{
              
//             }
//             console.log('请求失败了',error.response)
// 						//请求后更新List的数据
// 					}
// 				)
//     }
//   },
// }
