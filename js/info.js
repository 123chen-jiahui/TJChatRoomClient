var me = {} // 自身的信息
var friends = [] // 获取的好友信息

var groups = []

var messages_unread_raw = []

// 根据account返回nickName
function getNickName(account) {
  for (var i = 0; i < friends.length; i ++) {
    if (friends[i].account == account) {
      return friends[i].nickName
    }
  }
}

function getGroupName(groupId) {
  for (var i = 0; i < groups.length; i ++) {
    if (groups[i].Id == groupId) {
      return groups[i].Name
    }
  }
}