var legalServicesController = pbSmbApp.controller('legalServicesController', ['$scope', function ($scope) {
    $scope.selectedCategories = ['Shipping & Mailing',
		'Marketing',
		'Timesheets & Billing',
		'Accounting & Taxation',
		'Expense Management',
		'Appointment Management',
		'CRM',
		'Customer Support'];
    $scope.selectedApps = [];
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

	window.scrollTo(0, 0);

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

	$scope.selectApp = function(app){
		var index = $scope.selectedApps.indexOf(app);
		if(index == -1){
			 $scope.selectedApps.push(app);
		}else{
			$scope.selectedApps.splice(index,1);
		}
	}

	$scope.isAppSelected = function(app){
		return $scope.selectedApps.indexOf(app) != -1;
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
						'cost':'$10 per person/Month',
						'hyperLink':'http://www.shipminders.com'
					},
					{
						'name':'Raven Delivery',
						'desc':'Raven Delivery’ is an on-demand delivery platform integrated with UberRush/PostMates systems to our SMB clients.',
						'iconUrl':'Reven Delivery.png',
						'cost':'$10 per person/Month',
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
						'cost':'$10 per person/Month',
						'hyperLink':'http://www.adooapp.com'
					},
					{
						'name':'Repumanage',
						'desc':'Online reputation management solution',
						'iconUrl':'4_Repumanage.png',
						'cost':'$10 per person/Month',
						'hyperLink':'http://www.onlinerepumanage.com'
					},
					{
						'name':'AudienceKart',
						'desc':'Smart Audience connects SMBs such as small retail business owner, online retai....',
						'iconUrl':'2_Audicart.png',
						'cost':'$10 per person/Month',
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
						'cost':'$10 per person/Month',
						'hyperLink':'https://www.clicktime.com/'
					},
					{
						'name':'Toggl',
						'desc':'Time Tracker & Employee Timesheet Software',
						'iconUrl':'toggl.png',
						'cost':'$10 per person/Month',
						'hyperLink':'https://toggl.com/'
					},
					{
						'name':'Bigtime',
						'desc':'#1 Time & Billing App',
						'iconUrl':'Bigtime.png',
						'cost':'$10 per person/Month',
						'hyperLink':'https://www.bigtime.net/'
					}
			]
		},
		{
			'name':'Accounting & Taxation',
			'desc':'',
			'apps':[
					{
						'name':'Quickbooks',
						'desc':'#1 Cloud Accounting Software for Small Businesses',
						'iconUrl':'quickbooks.png',
						'cost':'$10 per person/Month',
						'hyperLink':'https://www.quickbooks.in/'
					},
					{
						'name':'Freshbooks',
						'desc':'Refreshingly Easy Accounting & Invoicing for Small Businesses',
						'iconUrl':'freshbooks.png',
						'cost':'$10 per person/Month',
						'hyperLink':'https://www.freshbooks.com/'
					}
			]
		},
		{
			'name':'Expense Management',
			'desc':'',
			'apps':[
					{
						'name':'Expensify',
						'desc':'Expense reports that don’t Suck !',
						'iconUrl':'expensify.png',
						'cost':'$10 per person/Month',
						'hyperLink':'https://www.quickbooks.in/'
					},
					{
						'name':'Concur',
						'desc':'Business & Travel Expense Management',
						'iconUrl':'concur.png',
						'cost':'$10 per person/Month',
						'hyperLink':'https://www.freshbooks.com/'
					},
					{
						'name':'Certify',
						'desc':'Travel & Expense Management Software',
						'iconUrl':'certify.png',
						'cost':'$10 per person/Month',
						'hyperLink':'https://www.freshbooks.com/'
					}
			]
		},
		{
			'name':'Appointment Management',
			'desc':'',
			'apps':[
					{
						'name':'Appointy',
						'desc':'Schedule Online, Increase Productivity, Retain Customers',
						'iconUrl':'appointy.png',
						'cost':'$10 per person/Month',
						'hyperLink':'https://www.quickbooks.in/'
					},
					{
						'name':'Simplybook.me',
						'desc':'Online booking system for websites, facebook and calendar scheduling app',
						'iconUrl':'Simplybookme.png',
						'cost':'$10 per person/Month',
						'hyperLink':'https://www.freshbooks.com/'
					}
			]
		}
	]
}]);