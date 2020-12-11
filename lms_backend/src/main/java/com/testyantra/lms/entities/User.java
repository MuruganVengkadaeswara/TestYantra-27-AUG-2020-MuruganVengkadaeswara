package com.testyantra.lms.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int userId;

	@Column(name = "user_name", unique = true)
	private String userName;

///	@Pattern(regexp = "^((?!.*[\\s])(?=.*[A-Z])(?=.*\\d).{8,15})",message = "Password ")
	private String password;

//	@Pattern(regexp = "\"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$\"\n")
	@Column(name = "user_email", unique = true)
	private String userEmail;
	
//	@Lob
//	@Column(name="profile_photo",nullable = false,columnDefinition = "mediumblob")
//	private byte[] image;

	@ManyToOne
	@JoinColumn(name = "roleId", referencedColumnName = "role_id", insertable = false, updatable = false)
	private Role role;

	@Column(name = "roleId")
	private int roleId;

}
