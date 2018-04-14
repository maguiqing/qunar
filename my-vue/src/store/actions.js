export default{
	setCityAfterFiveSeconds({commit},city){
       setTimeout(()=>{
         commit("changeCity",city)
       },5000)
	}
}