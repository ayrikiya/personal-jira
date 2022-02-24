/*
 * @Author: 王荣
 * @Date: 2022-02-24 14:46:51
 * @LastEditors: 王荣
 * @LastEditTime: 2022-02-24 14:59:37
 * @Description: 填写简介
 */

module.exports = (req, res, next) => {
    if(req.method === "POST" && req.path === "/login"){
        if(req.body.username === 'dadada' && req.body.password === '123456'){
            return res.status(200).json({
                user:{
                    token:'123'
                }
            })
        }else{
            return res.status(400).json({message:"用户密码错误"})
        }
    }
    next()
}