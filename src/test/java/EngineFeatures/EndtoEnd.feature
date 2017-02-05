Feature: To complete the flow of buying a ticket from Cleartrip

@CaseSetup
Scenario: Just to Setup the Architecture 
Given I am navigating to site
And Select kind of Trip as "One way"
And Select Booking From "Bangalore, IN - Kempegowda International Airport (BLR)" to "Varanasi, IN - Lal Bahadur Shastri (VNS)"
And Set Value on the First page with some params
And Click on Book Button on second page
And Do continue booking
And Give Travellers information with some params
Then Give Payment information and proceed
