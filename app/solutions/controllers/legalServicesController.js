var legalServicesController = pbSmbApp.controller('legalServicesController', ['$scope', function ($scope) {
    $scope.selectedCategories = [];
    $scope.categories = [
    	'Shipping & Mailing',
		'Marketing',
		'Timesheets & Billing',
		'Accounting & Taxation',
		'Expense Management',
		'Appointment Management',
		'CRM',
		'Customer Support'
	]

	$scope.selectCategory = function(category){
		var index = $scope.selectedCategories.indexOf(category);
		if(index == -1){
			 $scope.selectedCategories.push(category);
		}else{
			$scope.selectedCategories.splice(index,1);
		}
	}

	$scope.isCatSelected = function(cat){
		return $scope.selectedCategories.indexOf(cat) != -1;
	}

	$scope.categoryList = [
		{
			'name':'Shipping & Mailing',
			'desc':'Send, Receive, Track, Sort, Go Global',
			'apps':[
					{
						'name':'Shipminder',
						'desc':'A calendar integration app that saves shipping costs',
						'iconUrl':'Shipminders logo.png',
						'cost':'$ 10 per person/Month',
						'hyperLink':'http://www.shipminders.com'
					},
					{
						'name':'Raven Delivery',
						'desc':'Raven Delivery’ is an on-demand delivery platform integrated with UberRush/PostMates systems to our SMB clients.',
						'iconUrl':'Shipminders logo.png',
						'cost':'$ 10 per person/Month',
						'hyperLink':'http://www.shipminders.com'
					}
			]
		},
		{
			'name':'Marketing',
			'desc':'Reach out to new customers, analyse competition, build digital presence',
			'apps':[
					{
						'name':'Adoo App',
						'desc':'Smart Contacts and New Customer Acquisition App for SMBs',
						'iconUrl':'1_Adoo.png',
						'cost':'$ 10 per person/Month',
						'hyperLink':'http://www.adooapp.com'
					},
					{
						'name':'Repumanage',
						'desc':'Online reputation management solution',
						'iconUrl':'4_Repumanage.png',
						'cost':'$ 10 per person/Month',
						'hyperLink':'http://www.onlinerepumanage.com'
					},
					{
						'name':'AudienceKart',
						'desc':'Smart Audience connects SMBs such as small retail business owner, online retai....',
						'iconUrl':'2_Audicart.png',
						'cost':'$ 10 per person/Month',
						'hyperLink':'http://www.audiencekart.com'
					}
			]
		},
		{
			'name':'Timesheets & Billing',
			'desc':'',
			'apps':[
					{
						'name':'ClickTime',
						'desc':'Easy Online Timesheets',
						'iconUrl':'Clicktime.png',
						'cost':'$ 10 per person/Month',
						'hyperLink':'https://www.clicktime.com/'
					},
					{
						'name':'Toggl',
						'desc':'Time Tracker & Employee Timesheet Software',
						'iconUrl':'toggl.png',
						'cost':'$ 10 per person/Month',
						'hyperLink':'https://toggl.com/'
					},
					{
						'name':'Bigtime',
						'desc':'#1 Time & Billing App',
						'iconUrl':'Bigtime.png',
						'cost':'$ 10 per person/Month',
						'hyperLink':'https://www.bigtime.net/'
					}
			]
		}
	]
}]);