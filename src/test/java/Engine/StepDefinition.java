package Engine;

import businesscomponent.Logics;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import generics.Constant;
import generics.WebdriverGenerics;

public class StepDefinition {

	Logics logics=new Logics();
	
	@Given("^I am navigating to site$")
	public void NavigateToSite(){
	   WebdriverGenerics.GetURL(Constant.URL);
	   WebdriverGenerics.WaitImplicitlyForPageToLoad();
	}
	
	@And("^Select kind of Trip as \"(.*?)\"$")
	public void selectTripKind(String TripType){
		logics.SelectTripWithGivenType(TripType);
	}
	
	@And("^Select Booking From \"(.*?)\" to \"(.*?)\"$")
	public void selectBookingFrom(String From,String To) throws InterruptedException{
		logics.SelectBookingWithparams(From, To);
	}
	
	
	@And("^Select DepartDate as \"(.*?)\" and ReturnDate as \"(.*?)\"$")
	public void selectDapartAndReturn(String Depart,String Return) throws InterruptedException{
		logics.SelectDepartAndReturn(Depart, Return);
	}
	
	@And("^Click on Search button$")
	public void clickOnSearchButton() throws InterruptedException{
		logics.ClickOnSearchButtonOnFirstPage();
	}
	
	
	@And("^Conform Booking from Second Page$")
	public void conformBookingSecondPage() throws InterruptedException{
		logics.ClickOnBookButton();
	}
	
	
	
}
