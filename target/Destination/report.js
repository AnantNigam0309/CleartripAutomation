$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EndtoEnd.feature");
formatter.feature({
  "line": 1,
  "name": "To complete the flow of buying a ticket from Cleartrip",
  "description": "",
  "id": "to-complete-the-flow-of-buying-a-ticket-from-cleartrip",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Just to Setup the Architecture",
  "description": "",
  "id": "to-complete-the-flow-of-buying-a-ticket-from-cleartrip;just-to-setup-the-architecture",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@CaseSetup"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am navigating to site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Select kind of Trip as \"Round trip\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Select Booking From \"Bangalore, IN - Kempegowda International Airport (BLR)\" to \"Varanasi, IN - Lal Bahadur Shastri (VNS)\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select DepartDate as \"Thu, 16 Feb, 2017\" and ReturnDate as \"Thu, 18 Feb, 2017\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Conform Booking from Second Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.NavigateToSite()"
});
formatter.result({
  "duration": 3989770889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Round trip",
      "offset": 24
    }
  ],
  "location": "StepDefinition.selectTripKind(String)"
});
formatter.result({
  "duration": 966743712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangalore, IN - Kempegowda International Airport (BLR)",
      "offset": 21
    },
    {
      "val": "Varanasi, IN - Lal Bahadur Shastri (VNS)",
      "offset": 81
    }
  ],
  "location": "StepDefinition.selectBookingFrom(String,String)"
});
formatter.result({
  "duration": 2827168960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thu, 16 Feb, 2017",
      "offset": 22
    },
    {
      "val": "Thu, 18 Feb, 2017",
      "offset": 60
    }
  ],
  "location": "StepDefinition.selectDapartAndReturn(String,String)"
});
formatter.result({
  "duration": 5130377808,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clickOnSearchButton()"
});
formatter.result({
  "duration": 150504074,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.conformBookingSecondPage()"
});
formatter.result({
  "duration": 109448189617,
  "error_message": "java.lang.NullPointerException\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:397)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:504)\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:356)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:351)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:85)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\n\tat com.sun.proxy.$Proxy35.get(Unknown Source)\n\tat businesscomponent.Logics.ClickOnBookButton(Logics.java:64)\n\tat Engine.StepDefinition.conformBookingSecondPage(StepDefinition.java:43)\n\tat ✽.And Conform Booking from Second Page(EndtoEnd.feature:10)\n",
  "status": "failed"
});
});