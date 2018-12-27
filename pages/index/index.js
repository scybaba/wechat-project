Page({
  leftmove: 0, 
  rightmove:0,
  data: {
sheets:'',
    actionSheetHidden:true,
    actionSheetItems: [],
    title:'',
    desc:'',
    leftanimationData: {},
    regthanimationData: {},
    lefttime:0,
    rightime:0,
    voice:0,
  },
  onLoad: function (options) {
    console.log(options);

  },
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46')
  },
  onShow: function () { //动态更新设置信息到计时页面
    //显示页面
    var configs= wx.getStorageSync('configs') //获取缓存数据,获取设置页面的信息
    var actionSheetItems=[];
    var first=true;//判断是否是第一个
    for (var i in configs){//获取缓存放入到数组里面
      var config = configs[i];
      if (config.state){
        if(first){
          var desc = config.desc.replace(/@/g, config.time +'秒');//动态时间的显示，正则表达式。
          this.setData({ title: config.name, desc: config.desc, lefttime: config.time, rightime: config.time, voice: config.voice})  
          first=false;
        }
        actionSheetItems.push({ name: config.name, id: config.id});
      }
    }
    this.setData({ actionSheetItems: actionSheetItems})   
  },
  onHide: function () {
  },
  onUnload: function () {
  },
  actionSheetTap: function (e) { //按钮被点击的时候显示隐藏操作，做相反的操作
    this.setData({ actionSheetHidden: !this.data.actionSheetHidden})
  },
  actionSheetChange: function (e) { //点击每一项的时候显示隐藏操作
    this.setData({ actionSheetHidden: !this.data.actionSheetHidden })
  },
  bindItemTap: function (e) { //通过点击事件改变按钮里面的值 
    this.leftStop();
    this.rightStop(); //切换环节的时候都停止
  console.log(e);//id值
  var id=e.target.id;        
  var configs = wx.getStorageSync('configs') //获取缓存数据,获取设置页面的信息
  var config=configs[id];    
  this.setData({ title: config.name, desc: config.desc, actionSheetHidden: true, lefttime: config.time, rightime: config.time, voice: config.voice})                                      
  },
  leftStop:function(){
    clearInterval(this.leftintervel);
    this.leftintervel = 0;
    this.audioPause();
  },
  rightStop: function () {
    clearInterval(this.rightIntervel);
    this.rightIntervel = 0;
    this.audioPause();
  },
  leftStart:function(){  //点击按钮让图片旋转
    this.rightStop(); //点击自己的时候停掉对方
    if (this.leftintervel && this.leftintervel != 0) { //如果在旋转就需要停掉旋转
      this.leftStop();  //点击自己的时候，第二次停掉自己
      return;
    }
    
    var animation=wx.createAnimation({   //创建一个动画实例
      duration:1000,
      timingFunction:'ease',
    })
    animation.rotate(this.leftmove+=100).step(); //点击一次就会旋转图像100度
    this.setData({ leftanimationData: animation.export() })  
    var page=this;
    var leftintervel= setInterval(function(){
      　　　if (page.data.lefttime<=0){
           page.leftStop();
           return;
      }
         if (page.data.lefttime <=page.data.voice ) {
           page.audioPlay();    
         }
      animation.rotate(page.leftmove += 100).step(); //点击一次就会旋转图像100度
      page.setData({ leftanimationData: animation.export() }) 
      page.setData({ lefttime: page.data.lefttime-1}) 
    },1000)  
    this.leftintervel = leftintervel;//将把当前结果存储在page页面了
  },
  rightStart:function(){
    this.leftStop();
    if (this.rightIntervel && this.rightIntervel != 0) { //如果在旋转就需要停掉旋转
      this.rightStop();
      return;
    }
    var animation = wx.createAnimation({   //创建一个动画实例
      duration: 1000,
      timingFunction: 'ease',
    })
    animation.rotate(this.rightmove += 100).step(); //点击一次就会旋转图像100度
    this.setData({ regthanimationData: animation.export() })    
    var page = this;
    var rightIntervel = setInterval(function () {
      if (page.data.rightime <= 0) {
        page.rightStop();
        return;
      }
      if (page.data.rightime <= page.data.voice) {
        page.audioPlay();
      }
      animation.rotate(page.rightmove += 100).step(); //点击一次就会旋转图像100度
      page.setData({ regthanimationData: animation.export() })
      page.setData({ rightime: page.data.rightime - 1 }) 
    }, 1000)
    this.rightIntervel = rightIntervel;//将把当前结果存储在page页面了
  },
  audioPlay: function () {//播放声音
    this.audioCtx.play()
  },
  audioPause: function () { //暂停声音
    this.audioCtx.pause()
  },
})                                                                                                                                                                                                                                                                                                                                                               