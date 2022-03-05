const userLogin = {
   namespaced:true,
    state:{
       login: {number:'',password:''}
    },
    mutations:{
      login(state, loginValue){
         state.login.number = loginValue.number
         state.login.password = loginValue.password
     },
   },
    actions:{
    }
 
}
export default userLogin