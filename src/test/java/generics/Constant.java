package generics;

import org.openqa.selenium.WebDriver;

public class Constant {

	public static final  String RootPath = System.getProperty("user.dir").replace("\\", "/");
	public static final String ChromeDriverPath=RootPath+"/driver/chromedriver";
	public static String URL;
	public static WebDriver driver;
}
