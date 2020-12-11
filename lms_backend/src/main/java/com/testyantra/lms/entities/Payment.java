package com.testyantra.lms.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@Entity
@Table(name = "payments")
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long paymentId;

	@Column(name = "amount_paid")
	private long amountPaid;

	@ManyToOne
	@JoinColumn(name = "loanId", referencedColumnName = "loanId", insertable = false, updatable = false)
	private Loan loan;

	@Column(name = "loanId")
	private long loanId;

	@Temporal(TemporalType.TIMESTAMP)
	private Date paidOn;

	private long fines;

}
