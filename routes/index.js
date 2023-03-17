const express=require('express')

const indexcontroller=require('../controller/index')
const router=express.Router()



router.get('/',indexcontroller.getexpensepage)
router.get('/getexpense',indexcontroller.getexpenses)
router.post('/addexpense',indexcontroller.addexpenses)
router.delete('/deleteexpense/:id',indexcontroller.delete)
router.delete('/editexpense/:id',indexcontroller.editexpense)
module.exports=router