package com.testyantra.lms.service;

import java.util.List;

import com.testyantra.lms.entities.Client;
import com.testyantra.lms.entities.Loan;
import com.testyantra.lms.entities.Payment;

public interface ClientService {

	// client operations
	public Loan getLoanDetails(long loanId);

	public Client getClient(String email);
	
	public List<Loan> getAllLoans(Long clientId);

	// payment operations
	public Payment makePayment(Payment payment);

	public Payment getPaymentDetails(long paymentId);
	
	public List<Payment> getPayments(Long loanId);
}
