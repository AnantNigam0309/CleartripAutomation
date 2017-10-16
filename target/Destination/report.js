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
  "name": "Step by Step Execution of Payment Flow on Cleartrip",
  "description": "",
  "id": "to-complete-the-flow-of-buying-a-ticket-from-cleartrip;step-by-step-execution-of-payment-flow-on-cleartrip",
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
  "name": "Select DepartDate as \"Fri, 12 Jan, 2018\" and ReturnDate as \"Sun, 21 Jan, 2018\"",
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
formatter.step({
  "line": 11,
  "name": "Pass Itenerary on Third page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Fill Traveller information as \"Mr\" \"Anant\" \"Nigam\" \"8497846843\" and Continue to payment",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Conform the payment option is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.NavigateToSite()"
});
formatter.result({
  "duration": 3610707551,
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
  "duration": 1105607587,
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
  "duration": 2746447788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fri, 12 Jan, 2018",
      "offset": 22
    },
    {
      "val": "Sun, 21 Jan, 2018",
      "offset": 60
    }
  ],
  "location": "StepDefinition.selectDapartAndReturn(String,String)"
});
formatter.result({
  "duration": 2983173992,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clickOnSearchButton()"
});
formatter.result({
  "duration": 158728173,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.conformBookingSecondPage()"
});
formatter.result({
  "duration": 24101241473,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.PassItenary()"
});
formatter.result({
  "duration": 8698296266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 31
    },
    {
      "val": "Anant",
      "offset": 36
    },
    {
      "val": "Nigam",
      "offset": 44
    },
    {
      "val": "8497846843",
      "offset": 52
    }
  ],
  "location": "StepDefinition.TravellerInformation(String,String,String,String)"
});
formatter.result({
  "duration": 6197893587,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.PaymentValidation()"
});
formatter.result({
  "duration": 5360421583,
  "status": "passed"
});
});