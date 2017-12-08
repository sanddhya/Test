var homePageController = pbSmbApp.controller('homePageController', ['$scope', function ($scope) {
    $scope.page = "Home Page"


    $(document).ready(function () {

        $(".single-item").slick({
            autoplay: true,
            autoplaySpeed: 2000,
            arrows:false,
            dots:true
        });

        $('a[data-toggle]').click(function () {
            var category = $(this).attr('data-toggle');
            switchToCategory(category);

            $('a[data-toggle]').removeClass('active');
            $(this).addClass('active');
        })

        function switchToCategory(category) {
            $('.main-section .body section').fadeOut();
            if (category == 'all') {
                $('.main-section .body section').slideDown();
            } else {
                $('section#' + category).slideDown();
            }

        }
    });

}]);