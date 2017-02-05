Feature: To complete the flow of buying a ticket from Cleartrip

@CaseSetup
Scenario: Step by Step Execution of Payment Flow on Cleartrip 
Given I am navigating to site
And Select kind of Trip as "Round trip"
And Select Booking From "Bangalore, IN - Kempegowda International Airport (BLR)" to "Varanasi, IN - Lal Bahadur Shastri (VNS)"
And Select DepartDate as "Thu, 16 Feb, 2017" and ReturnDate as "Thu, 18 Feb, 2017"
And Click on Search button
And Conform Booking from Second Page
And Pass Itenerary on Third page
And Fill Traveller information as "Mr" "Anant" "Nigam" "8497846843" and Continue to payment
Then Conform the payment option is Displayed 