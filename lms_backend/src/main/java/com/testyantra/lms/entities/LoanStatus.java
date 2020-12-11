package com.testyantra.lms.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "loan_application_status")
public class LoanStatus {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long statusId;

//	@NotNull
	private String status;

//	@NotNull
	@Column(name = "application_category")
	private String category;

//	@NotNull
	@Column(name = "approver_id")
	private long approverId;

//	@NotNull
	@Column(name = "approved_on")
	private Date approvedOn;
//	

}
