package Engine;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StepDefinition {

	@Given("^I am navigating to site \"(.*?)\"$")
	public void NavigateToSite(String URL){
		//Open Browser with URL
	}
	
	@And("^Set Value on the First page with some params$")
	public void SetFirstPage(){
		//Set First page businesscomponent and call here
	}
	
	@And("^Click on Book Button on second page$")
	public void HandleSecondPage(){
		//Click in generics 
	}
	
	@And("^Do continue booking$")
	public void ContinueBooking(){
		//Click in generics
	}
	
	@And("^Give Travellers information with some params$")
	public void TravellingInformation(){
		//business comp
	}
	
	@Then("Give Payment information and proceed$")
	public void FillPaymentInformation(){
		//businesscomponent
	}
}
