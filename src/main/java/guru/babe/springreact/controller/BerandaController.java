package guru.babe.springreact.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BerandaController {

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }

}
