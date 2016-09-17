angular.module('financier').controller('requestResetPasswordCtrl', function($scope, User, userEmail) {
  this.email = userEmail;

  this.submit = email => {
    this.loading = true;
    this.formDisabled = true;

    User.requestResetPassword(email)
    .then(() => {
      this.success = true;
      document.activeElement.blur();
    })
    .catch(e => {
      this.error = e;
    })
    .finally(() => {
      this.loading = false;
    });
  };

  $scope.$watch(() => this.email, email => {
    this.formDisabled = false;

    if (angular.isDefined(email)) {
      this.form.$setValidity('internalError', true);
    }
  });
});