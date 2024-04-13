package com.demo.bean;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
public class usersBean {
	@Id
	@Column(length = 14)
	private String phoneNumber;
	@Column(length = 20)
	private String userName;
	@Column(length = 10)
	private String gender;
	@Column(length = 25)
	private String email;
	@Column(length = 4)
	private int age;
	private Date dob;
	
	
}
