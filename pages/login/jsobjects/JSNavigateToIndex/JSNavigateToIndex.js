export default {
	myVar1: [],
	myVar2: {},
	navigateTo: () => {
		//write code here
		storeValue("token", JSLogin.data.data.token)
		navigateTo("index")
	},
	myFun2: async () => {
		//use async-await or promises
	}
}