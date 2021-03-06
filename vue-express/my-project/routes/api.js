var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index.json', function(req, res, next) {
  res.json({
	"ret":true,
	"data":{
		"swiper":[
		   {"id":"0001",
		   "imgurl":"//gw.alicdn.com/tfs/TB1hLaThf1TBuNjy0FjXXajyXXa-1125-352.jpg_760x760q75.jpg_.webp"},
		   {"id":"0002",
		   "imgurl":"//gw.alicdn.com/tfs/TB1hMHcg1SSBuNjy0FlXXbBpVXa-1125-352.jpg_760x760q75.jpg_.webp"},
		   {"id":"0003",
		   "imgurl":"//gw.alicdn.com/imgextra/i1/0/TB2yNQ_hCBYBeNjy0FeXXbnmFXa_!!0-travel.jpg_760x760q75.jpg_.webp"}],
		 "icons":[{"id":"0001",
		   "imgurl":"//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
		   {"id":"0002",
		   "imgurl":"//fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
		   {"id":"0003",
		   "imgurl":"//fuss10.elemecdn.com/c/e9/8b589472823fa97666cef19af644cjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
		   {"id":"0004",
		   "imgurl":"//fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
		   {"id":"0005",
		   "imgurl":"//fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
		   {"id":"0006",
		   "imgurl":"//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
		   {"id":"0007",
		   "imgurl":"//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
		   {"id":"0008",
		   "imgurl":"//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
		   {"id":"0009",
		   "imgurl":"//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
		   {"id":"0010",
		   "imgurl":"//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
		   {"id":"0011",
		   "imgurl":"//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
		   {"id":"0012",
		   "imgurl":"//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
		   {"id":"0013",
		   "imgurl":"//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"},
		   {"id":"0014",
		   "imgurl":"//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"}]
	}
  })
});

module.exports = router;
