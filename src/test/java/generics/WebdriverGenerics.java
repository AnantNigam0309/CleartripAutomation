package generics;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

public class WebdriverGenerics extends Constant{

	public static void OpenBrowser(String browserType){
		System.out.println("Opening: " + browserType + " Browser");
		try{
          if(browserType.equalsIgnoreCase("FF") || (browserType.equalsIgnoreCase("Firefox"))){
		    driver = new FirefoxDriver();
		    driver.manage().window().maximize();
		  }else if(browserType.equalsIgnoreCase("chrome") ){
			System.setProperty("webdriver.chrome.driver", ChromeDriverPath);
			ChromeOptions chromeOptions = new ChromeOptions(); 
			chromeOptions.addArguments("--test-type");
			DesiredCapabilities capabilities = DesiredCapabilities.chrome(); 
			capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
			capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions); 
			driver = new ChromeDriver(chromeOptions);
			driver.manage().window().maximize();
		  }else{
			  System.out.println("Using Default browser as FireFox");
			  driver = new FirefoxDriver();
			  driver.manage().window().maximize();
		  }
		}catch(Exception exp){
			System.out.println(exp.getMessage());
		}
	}
	
	public static void GetURL(String URL){
		System.out.println("Navigating to (" + URL + ") Site");
		try{
			driver.get(URL);
		}catch(Exception exp){
			System.out.println(exp.getMessage());
		}
	}
	
	public static void QuitBrowser(){
		System.out.println("Quiting all the open tabs");
		try{
			driver.quit();
		}catch(Exception exp){
			System.out.println(exp.getMessage());
		}
	}
	
	public static void CloseRecentBrowser(){
		System.out.println("Closing the recent tabs");
		try{
			driver.close();
		}catch(Exception exp){
			System.out.println(exp.getMessage());
		}
	}
	
	public static void WaitImplicitlyForPageToLoad(){
		System.out.println("Waiting For Page to Load ");
		try{
			driver.manage().timeouts().implicitlyWait(90, TimeUnit.SECONDS);
		}catch(Exception exp){
			System.out.println(exp.getMessage());
		}
	}
}
