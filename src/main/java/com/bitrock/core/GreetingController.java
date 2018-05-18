package com.bitrock.core;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by Cabe on 5/18/18.
 */

@Controller
public class GreetingController {

    @RequestMapping("/")
    public String greeting(@RequestParam(value="name", defaultValue="World") String name, Model model) {
        model.addAttribute("greeting", new Greeting(name));
        return "index";
    }
}
