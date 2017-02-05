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
  "name": "Select kind of Trip as \"One way\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Select Booking From \"Bangalore, IN - Kempegowda International Airport (BLR)\" to \"Varanasi, IN - Lal Bahadur Shastri (VNS)\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Set Value on the First page with some params",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Book Button on second page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Do continue booking",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Give Travellers information with some params",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Give Payment information and proceed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NavigateToSite()"
});
formatter.result({
  "duration": 4244470440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One way",
      "offset": 24
    }
  ],
  "location": "StepDefinition.selectTripKind(String)"
});
formatter.result({
  "duration": 382195860,
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
  "duration": 2525822298,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.SetFirstPage()"
});
formatter.result({
  "duration": 29113,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.HandleSecondPage()"
});
formatter.result({
  "duration": 26075,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.ContinueBooking()"
});
formatter.result({
  "duration": 30713,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.TravellingInformation()"
});
formatter.result({
  "duration": 29369,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.FillPaymentInformation()"
});
formatter.result({
  "duration": 25041,
  "status": "passed"
});
});