package com.testyantra.lms.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
@Table(name = "clients")
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "client_id")
	private long clientId;

//	@Pattern(regexp = "/^[a-z ,.'-]+$/i\n")
	@Column(name = "first_name")
	private String firstName;

//	@Pattern(regexp = "/^[a-z ,.'-]+$/i\n")
	@Column(name = "last_name")
	private String lastName;

//	@Pattern(regexp = "^[#.0-9a-zA-Z\\s,-]+$\n")
	@Column(name = "address_1")
	private String address1;

//	@Pattern(regexp = "^[#.0-9a-zA-Z\\s,-]+$\n")
	@Column(name = "address_2")
	private String address2;

//	@Pattern(regexp = "/^(\\+\\d{1,3}[- ]?)?\\d{10}$/")
	private String mobile1;

//	@Pattern(regexp = "/^(\\+\\d{1,3}[- ]?)?\\d{10}$/")
	private String mobile2;

//	@Pattern(regexp = "/^[a-zA-Z ]*$/")
	private String state;

//	@Pattern(regexp = "^[0-9]{6,6}$")
	private int pincode;

//	@Pattern(regexp = "/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/")
	private String email;

	@Column(name = "client_status")
	private String clientStatus;

	@OneToMany(mappedBy = "client")
	@JsonIgnore
	private List<Loan> loan;

}
