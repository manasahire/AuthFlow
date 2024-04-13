package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.demo.bean.usersBean;
import com.demo.dao.userRepo;

@RestController
@RequestMapping("/registration")
@CrossOrigin("http://localhost:3000")
public class userController {

	@Autowired
	userRepo repo;

	@PostMapping("/addusers")
	public void addusers(@RequestBody usersBean user) {
		repo.save(user);
	}

	@GetMapping("/getall")
	public List<usersBean> fetchAll() {
		return repo.findAll();
	}

	@GetMapping("/byId/{id}")
	public usersBean getByID(@PathVariable String id) {
		return repo.findById(id).get();
	}

//	@GetMapping("/byRange/{min}/{max}")
//	public List<usersBean> getByRange(@PathVariable double min, @PathVariable double max) {
//		return repo.findByproPriceBetween(min, max);
//	}
	@GetMapping("/byNm/{nm}")
	public List<usersBean> getBynm(@PathVariable String name) {
		return repo.findByuserName(name);
	}
}
