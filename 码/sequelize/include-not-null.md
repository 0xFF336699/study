var users  = require('./database/models').user;

    models.Order.findOne({
    where: {
        id: req.params.id
    },attributes: ['orderStatus','id','serviceId','orderDescription','orderScheduledDate'],
    include: [
        {model: users,required: false,
        attributes: ['firstName','phoneNumber']
        }
    ]
}).then(function(data) {

    res.status(200).send({data : data,serviceName : data["serviceId"]});

});

required: true就是不能为空