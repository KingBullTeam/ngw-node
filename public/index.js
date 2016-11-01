new Vue({
  el: '#app',
  ready: function () {
    this.getList();
  },
  data: {
    user: '',
    users: '',
    search: ''
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
        this.user = '';
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
    },
    findUser: function () {
      alert(this.search)
      this.$http.get('/users/opt=' + this.search).then(function (res) {
        this.$set('users', res.body);
        this.search = '';
      }), function (res) {
        console.log(res);
      };
    }
  }
});
