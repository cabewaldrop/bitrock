package com.bitrock.core;

/**
 * Created by Cabe on 5/18/18.
 */
public class Greeting {
    private static final String template = "Hello, %s!";

    private String name;

    private String message;

    public Greeting(String name) {
        this.name = name;
        this.message = String.format(template, name);
    }

    public String getName() { return name; }

    public String getMessage() { return message; }
}
