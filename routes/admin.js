var express = require('express');
var router = express.Router();
var Movie = require('../models/movie')
 router.get('/', function(req, res){
  res.render('admin',{
     title: 'movie 后台录入页',
     movie: {
          doctor: '',
          country: '',
          title: '',
          year: '',
          poster: '',
          language: '',
          flash: '',
          summary: ''
     }
  })
})
router.get('/list', function(req, res){
  Movie.fetch(function(err, movies){
    res.render('list',{
       title: ' 列表页',
       movies: movies
        // movies: [{
        //     doctor: '乔斯·韦登',
        //     country: '美国',
        //     title: '复仇者联盟2',
        //     year: '2015',
        //     poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg',
        //     language: '英语',
        //     flash: 'http://v.youku.com/v_show/id_XODc4NDY0MjA4.html',
        //     summary: '影片讲述当钢铁侠试图启动处于休眠状态的维持和平计划时，事情出了差错。于是，在地球面临生死存亡的紧急关头时，强大的超级英雄们挺身而出承担起拯救世界的重任，他们将阻止可怕的人工智能机器人“奥创”制定恐怖计划。'
        // }]
  })
  })
})
router.get('/update/:id',function(req,res,next){
	res.render('detail',{
		  title: 'imooc 详情',
      movie: {
          doctor: '乔斯·韦登',
          country: '美国',
          title: '复仇者联盟2',
          year: '2015',
          poster: 'http://img31.mtime.cn/mg/2015/03/27/120537.13212993_270X405X4.jpg',
          language: '英语',
          flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
          summary: '影片讲述当钢铁侠试图启动处于休眠状态的维持和平计划时，事情出了差错。于是，在地球面临生死存亡的紧急关头时，强大的超级英雄们挺身而出承担起拯救世界的重任，他们将阻止可怕的人工智能机器人“奥创”制定恐怖计划。'
      }
	})
})	
module.exports = router;