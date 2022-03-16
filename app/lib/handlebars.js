const { format } = require('timeago.js');

const bcy = {};

bcy.timeago = (time) => {
 return format(time);
};

module.exports = bcy;