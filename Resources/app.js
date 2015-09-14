Ti.UI.setBackgroundColor("#ccc");

var mainWindow = Ti.UI.createWindow({
	backgroundColor:"#6E6E6E"
});
//Data
var theTAB = [
{title: "NFL", description: "Whether you are on the east coast, west coast, the north or the south, Seeing a game has never been easier. Now with the click of a button you have the ability to see where your team is playing anywhere in your local neighborhood. Now get your gear on and don't be late!"}
{title: "NBA", description: "It is that time of year again. The season has begun and don't fret on not having and NBA Season Pass. Seeing a game has never been easier. Now with the click of a button you have the ability to see where your team is playing anywhere in your local neighborhood. Now get your gear on and don't be late!"}
{title: "MLB", description: "Remember going to your favorite ballparks as a kid and rooting on your team? Well, maybe now you have moved and your favorite team isn't on TV anymore. Seeing a game has never been easier. Do not worry! Now with the click of a button you have the ability to see where your team is playing anywhere in your local neighborhood. Now get your gear on and don't be late!"}
{title: "NHL", description: "Nobody watches hockey anymore, right? Wrong!!! Seeing a game has never been easier. Now with the click of a button you have the ability to see where your team is playing anywhere in your local neighborhood. Now get your gear on and don't be late!"}
];

var specialEvents = [
{title: "Horse Racing", description: "It is that time of year again. The Belmont Stakes! The Derby! The Preakness! Seeing this special event has never been easier. Now with the click of a button you have the ability to see where it is playing anywhere in your local neighborhood. Now get ready and don't be late!"}
{title: "Olympics", description: "You have been patiently waiting 4 years to see the worlds best compete to see who is crowned  the best in the world! Seeing this special event has never been easier. Now with the click of a button you have the ability to see where it is playing anywhere in your local neighborhood. Now get ready and don't be late!"}
{title: "Boxing", description: "Nobody wants to pay $100 dollars to see a fight. Seeing this special event has never been easier. Now with the click of a button you have the ability to see where it is playing anywhere in your local neighborhood for free or with a cover. Don't worry we got you covered either way. Now get ready and don't be late!" }
];

var theTAB = [{title: "NFL"}, {title: "NBA"}, {title: "MLB"}, {title: "NHL"} ];
var specialEvents = [{title: "Horse Racing"}, {title: "Olympics"}, {title: "Boxing"}];

//Custom Table Header
var tableHeader = Ti.UI.createView({
	height: 50,
	backgroundColor: "#00BFFF",
});

var headerText = Ti.UI.createLabel({
	text: "Most Popular Sports",
	font: {fontSize: 22, fontWeight: "bold"},
	color: "#fff"
});
tableHeader.add(headerText);
var titleView = Ti.UI.createView({
	height: 60,
	backgroundColor: "#fff",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "#dbdbdb",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "What do you want to SEE!",
	font: {fontSize: 20, fontFamily: "Californian FB", fontWeight: "bold"},
	top: 20,
	width: "100%",
	textAlign: "center"
});

var sports = Ti.UI.createTableView({
	top: border.top + border.height
});

if(Ti.Platform.name === "iPhone OS"){
	sports.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var theTABSection = Ti.UI.createTableViewSection({
	headerTitle: "Most Popular Sports",
	footerTitle: "To Name a Few..."
});

var specialEventsSection = Ti.UI.createTableViewSection({
	headerTitle: "Special Events",
	footerTitle: "To Name a Few..."
});

for(var i=0, j=theTAB.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: theTAB[i].title
	});
	theTABSection.add(theRow);
}

var getDetail = function (){
	ver detailWindow = Ti.UI.createView({
		backgroundColor :"#6E6E6E"
	});
	var detailTitleView = Ti.UI.createView({
	height: 60,
	backgroundColor: "#fff",
	top: 0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: detailTitleView.height + detailTitleView.top
	});
	
	var detailTitleLabel = Ti.UI.createLabel({
		text: this.title, 
		font: {fontSize: 20, fontFamily: "Californian FB", fontWeight: "bold"},
		top: 20,
		width: "100%",
		textAlign: "center"
	});
	
	detailTitleView.add(detailTitleLabel);
	detailWindow.add(detailTitleView, detailBorder);
	
	detailWindow.open();
}

for(var i=0, j=specialEvents.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: specialEvents[i].title
		hasChild: true
	});
	if(Ti.Platform.name === "iPhone OS"){
	theRow.hasChild = false;
	theRow.hasDetail = true;
}

	specialEventsSection.add(theRow);
	theRow.addEventListener("click", getDetail);
}

var sportsSections = [theTABSection, specialEventsSection];
sports.setData (sportsSections);

titleView.add(titleLabel);
mainWindow.add( titleView, border, sports);
mainWindow.open();