package com.mv.lms.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Entity
@Data
@Table(name = "loan_types")
public class LoanType {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int loanTypeId;

//	@NotNull
	@Column(name = "loan_name")
	private String loanName;

//	@NotNull
	@Column(name = "interest_rate")
	private double interestRate;

//	@NotNull
	@Column(name = "bank_name")
	private String bankName;

}
