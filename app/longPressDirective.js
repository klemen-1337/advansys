app.directive('onLongPress', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var timeout;

            element.on('mousedown', function() {
                timeout = $timeout(function() {
                    console.log('Long Press Detected');
                    scope.$apply(attrs.onLongPress);
                }, 1000);
            });

            element.on('mouseup mouseleave', function() {
                $timeout.cancel(timeout);
            });
        }
    };
});