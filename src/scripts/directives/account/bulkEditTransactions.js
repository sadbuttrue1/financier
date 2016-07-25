angular.module('financier').directive('bulkEditTransactions', ($sce, $templateRequest, $templateCache, $compile, $timeout) => {

  function link(scope, element, attrs, ngModelCtrl) {
    element.on('click', event => {
      event.stopPropagation();

      const templateUrl = $sce.getTrustedResourceUrl('/scripts/directives/account/bulkEditTransactions.html');

      $templateRequest(templateUrl).then(template => {
        const wrap = angular.element('<div></div>').append(template);
        const content = $compile(wrap)(scope);

        content.on('keypress keydown', e => {
          if (e.which === 27) {
            dropInstance.close();
          }
        });

        const dropInstance = new Drop({
          target: element[0],
          content: content[0],
          classes: 'drop-theme-arrows-bounce',
          openOn: 'click',
          position: 'bottom center',
          constrainToWindow: true,
          constrainToScrollParent: false,
          tetherOptions: {
            targetOffset: '0 -15px',
            optimizations: {
              moveElement: true
            }
          }
        });

        scope.close = () => dropInstance.destroy();

        dropInstance.open();
      });
    });

  }

  return {
    restrict: 'A',
    controller: 'bulkEditTransactionsCtrl as bulkEditTransactionsCtrl',
    link: {
      bulkEditTransactions: '='
    },
    link
  };
});
