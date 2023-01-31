export default {
	myVar1: [],
	myVar2: {},
	toTtop: () => {
		//write code here
		var cur = 2
		var curImg = WAvatars.items[cur].avatar.image
		show.text = curImg
		for(let i=cur;i > 0;i--){
			WAvatars.items[i].avatar.image = WAvatars.items[i-1].avatar.image
    }
		WAvatars.items[0].avatar.image = "test"
	},
	myFun2: async () => {
		//use async-await or promises
	}
}