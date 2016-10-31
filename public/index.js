new Vue({
  el: '#app',
  ready: function () {
    this.getList();
  },
  data: {
    user: {},
    users: ''
  },
  methods: {
    getList: function () {
      this.$http.get('/users').then(function (res) {
        this.$set('users', res.body);
      }, function (res) {
        console.log(res);
      });
    },
    addUser: function () {
      this.$http.post('/users', this.user).then(function (res) {
        this.getList();
      }, function (res) {
        console.log(res);
      });
    },
    delUser: function (id) {
      this.$http.delete('/users/' + id).then(function (res) {
        this.getList();
      }, function (res) {
        console.log(res);
      });
    }
  }
});
