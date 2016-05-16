APP_MODULE
  .directive('directiveName', function () {
    return {
      replace: true,
      scope: { },
      templateUrl: '/app/components/directive-name/directive-name.html',
      link: function(scope, elem, attrs) {

      }
    }
  });