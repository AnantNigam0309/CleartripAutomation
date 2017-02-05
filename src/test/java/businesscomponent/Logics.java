package businesscomponent;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import generics.Constant;
import generics.WebdriverGenerics;
import pagefactory.WebElements;

public class Logics extends WebdriverGenerics{
   
	WebElements elements=PageFactory.initElements(Constant.driver, WebElements.class);
	
	public void SelectTripWithGivenType(String TripType){
		System.out.println("Selecting Trip Type as :"+TripType);
		List<WebElement> all_trips=elements.trip_type;
		for(int i=0;i<all_trips.size();i++){
			String ActualTripType=GetTextFromWebelement(all_trips.get(i));
			if(ActualTripType.equalsIgnoreCase(TripType)){
				ClickOnWebelements(all_trips.get(i));
			}
		}
		WaitImplicitlyForPageToLoad();
	}
	
	public void SelectBookingWithparams(String From,String To) throws InterruptedException{
		System.out.println("Selecting Booking from "+From+" to "+To);
		List<WebElement> trip_locators=elements.trip_locator;
		SendTextToElementUsingAction(trip_locators.get(0), From);
		PressEnterNow(trip_locators.get(0));
		SendTextToElementUsingAction(trip_locators.get(1), To);
		PressEnterNow(trip_locators.get(1));
		WaitImplicitlyForPageToLoad();
	}
}
