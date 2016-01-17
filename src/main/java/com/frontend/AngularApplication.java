package com.frontend;


import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import io.dropwizard.assets.AssetsBundle;

/**
 * This class launches the web application in an embedded Jetty container.
 * This is the entry point to your application. The Java command that is used for
 * launching should fire this main method.
 */
public class AngularApplication extends Application<AngularConfiguration> {
    public static void main(String[] args) throws Exception {
        new AngularApplication().run(args);
    }

    @Override
    public String getName() {
        return "Angular Frontend";
    }

    @Override
    public void initialize(Bootstrap<AngularConfiguration> bootstrap) {
        bootstrap.addBundle(new AssetsBundle("/assets", "/", "index.html"));
    }

    @Override
    public void run(AngularConfiguration configuration, Environment environment) {
        environment.jersey().setUrlPattern("/api/*");
    }
}