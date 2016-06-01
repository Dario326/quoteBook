angular.module("quoteBook").controller("mainCtrl", function($scope, dataService){
 
    $scope.quotes = dataService.getQuotes();
    
    
    $scope.deleteMe = function(textToDelete){
        dataService.removeData(textToDelete);
    }
    
    $scope.addQuote = function(){
        var newQuote = {
            Text: $scope.newQuoteText,
            Author: $scope.newQuoteAuthor
        }
        if(dataService.addData(newQuote))
            {
                 $scope.newQuoteText = '';
                 $scope.newQuoteAuthor= '';
            }
    }
});
