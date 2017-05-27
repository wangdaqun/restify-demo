/**
 * Created by lion9616 on 2017/5/27.
 */
var util = require('util');
var redis = require('redis'),
    RDS_PORT = 6379,		//端口号
    RDS_HOST = '120.25.76.226',	//服务器IP
    RDS_PWD = '1150115',
    RDS_OPTS = {auth_pass:RDS_PWD};			//设置项
var client = redis.createClient(RDS_PORT,RDS_HOST,RDS_OPTS);
client.on('ready',function(res){
    console.log('ready');
});

function redishset(name,key,value){
    client.hset(key,'taskid','2',function(err,res){
        if(err){
            console.log(err);
        } else{
            console.log(util.inspect(res));
        }
    });
}




exports.redishset=redishset;
