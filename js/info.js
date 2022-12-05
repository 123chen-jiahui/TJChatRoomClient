var me = {} // 自身的信息
var friends = [] // 获取的好友信息

var groups = [] // 获取的群聊信息

var messages_unread_raw = [] // 登录后获取的message

const Contacts = new Map() // 通信录，找不到的人都放这

// 根据account返回nickName
function getNickName(account) {
  for (var i = 0; i < friends.length; i ++) {
    if (friends[i].account == account) {
      return friends[i].nickName
    }
  }
}

function findFriend(account) {
  for (var i = 0; i < friends.length; i ++) {
    if (friends[i].account == account) {
      return friends[i]
    }
  }
  return {}
}

function getGroupName(groupId) {
  for (var i = 0; i < groups.length; i ++) {
    if (groups[i].Id == groupId) {
      return groups[i].Name
    }
  }
}