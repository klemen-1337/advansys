app.component('userInfo', {
    bindings: {
        user: '<',
        onDelete: '&'
    },
    transclude: true,
    templateUrl: 'user-info.template.html',

    controller: function() {
        var ctrl = this;
    
        ctrl.deleteUser = function() {
            if (confirm('Are you sure you want to delete this user?')) {
                ctrl.onDelete({ userId: ctrl.user.id });
            }
        };
    }
});