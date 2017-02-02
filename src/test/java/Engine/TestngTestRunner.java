package Engine;

import java.io.IOException;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.TestNGCucumberRunner;


@CucumberOptions(features="src/test/java/EngineFeatures/",
format= {"pretty","html:target/Destination"},
tags={"@CaseSetup"}
)

public class TestngTestRunner {

	@BeforeMethod
	public void beforeMethod(){
		System.out.println("Before method");
	}
	
	@Test(groups = "cucumber", description = "Runs Cucumber Features")
	public void run_cukes() throws IOException {
	  new TestNGCucumberRunner(getClass()).runCukes();
	}
	
	@AfterMethod
	public void afterMethod(){
		System.out.println("After method");
	}
}
