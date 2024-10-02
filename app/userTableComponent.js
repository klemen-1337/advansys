app.component('userTable', {
    bindings: {
        users: '<',
        onSelect: '&'
    },
    template: `
        <table class=user-table>
            <tr>
                <th>ID_USER</th>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>EMAIL</th>
            </tr>
            <tr ng-repeat="user in $ctrl.users" 
                ng-click="$ctrl.selectUser(user)"
                ng-class="{'selected-row': user === $ctrl.selectedUser}"
                ng-attr-id="{{user.id}}"
                on-long-press="logLongPress(user)">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
            </tr>
        </table>
    `,
    controller: function() {
        var ctrl = this;

        ctrl.selectUser = function(user) {
            ctrl.selectedUser = user;
            ctrl.onSelect({ user: user });
        };
    }
});