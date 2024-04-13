package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.bean.usersBean;

public interface userRepo extends JpaRepository<usersBean, String> {
	public List<usersBean> findByuserName(String name);
//	public List<usersBean> findByproPriceBetween(double min, double max);

}
