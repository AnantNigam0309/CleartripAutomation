package pagefactory;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class WebElements {

	final WebDriver driver;	
	WebElement element;
	
	@FindBy(xpath="//ul[li[label[@title='One way']]]/li")
	public List<WebElement> trip_type;
	
	@FindBy(xpath="//div[@id='ORtrip']/section[1]//span")
	public List<WebElement> trip_locator;
	
	public WebElements(WebDriver driver){
		this.driver=driver;
	}
}
