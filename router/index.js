const router=require('express').Router();

router.get('/',(req,res)=>{
    res.render('index');
});


router.get('/furOne',(req,res)=>{
    res.render('livingroom')
})
router.get('/furTwo',(req,res)=>{
    res.render('DiningRoom')
})
router.get('/furThree',(req,res)=>{
    res.render('OfficeFurniture')
})
router.get('/furFour',(req,res)=>{
    res.render('kitchen')
})
router.get('/furFive',(req,res)=>{
    res.render('MoreFurniture')
})
router.get('/about',(req,res)=>{
    res.render('about')
})




module.exports=router;


