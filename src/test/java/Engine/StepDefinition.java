package Engine;

import businesscomponent.Logics;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import generics.Constant;
import generics.WebdriverGenerics;

public class StepDefinition {

	Logics logics=new Logics();
	
	@Given("^I am navigating to site$")
	public void NavigateToSite(){
	   WebdriverGenerics.GetURL(Constant.URL);
	   WebdriverGenerics.WaitImplicitlyForPageToLoad();
	}
	
	@And("^Set Value on the First page with some params$")
	public void SetFirstPage(){
		//Set First page businesscomponent and call here
	}
	
	@And("^Select kind of Trip as \"(.*?)\"$")
	public void selectTripKind(String TripType){
		logics.SelectTripWithGivenType(TripType);
	}
	
	@And("^Select Booking From \"(.*?)\" to \"(.*?)\"$")
	public void selectBookingFrom(String From,String To) throws InterruptedException{
		logics.SelectBookingWithparams(From, To);
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
