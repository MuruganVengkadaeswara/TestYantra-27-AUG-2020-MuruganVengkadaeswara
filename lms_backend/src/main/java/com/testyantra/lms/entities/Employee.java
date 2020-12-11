package com.testyantra.lms.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import lombok.Data;

@Data
@Entity
@Table(name = "employees")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "employee_id")
	private int employeeId;

//	@Pattern(regexp = "/^[a-z ,.'-]+$/i\n")
	@Column(name = "first_name")
	@NotNull
	private String firstname;

//	@Pattern(regexp = "/^[a-z ,.'-]+$/i\n")
	@Column(name = "last_name")
	@NotNull
	private String lastname;
	
	@NotNull
	private String department;
	
	//try @validEmail
	
//	@Pattern(regexp = "/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/")
	@Column(name = "email", unique = true)
	@NotNull
	private String email;

//	@Pattern(regexp = "/^[a-zA-Z ]*$/")
	@NotNull
	private String designation;

	@NotNull
	@Column(name = "employee_status")
	@NotNull
	private String employeeStatus;

}
