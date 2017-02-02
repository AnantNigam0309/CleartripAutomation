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
  "name": "I am navigating to site \"Andnd\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Set Value on the First page with some params",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Book Button on second page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Do continue booking",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Give Travellers information with some params",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Give Payment information and proceed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Andnd",
      "offset": 25
    }
  ],
  "location": "StepDefinition.NavigateToSite(String)"
});
formatter.result({
  "duration": 178587986,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.SetFirstPage()"
});
formatter.result({
  "duration": 140726,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.HandleSecondPage()"
});
formatter.result({
  "duration": 117374,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.ContinueBooking()"
});
formatter.result({
  "duration": 118348,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.TravellingInformation()"
});
formatter.result({
  "duration": 120687,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.FillPaymentInformation()"
});
formatter.result({
  "duration": 128123,
  "status": "passed"
});
});