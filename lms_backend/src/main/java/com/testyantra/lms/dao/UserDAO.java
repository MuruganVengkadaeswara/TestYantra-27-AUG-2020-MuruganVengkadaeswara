package com.testyantra.lms.dao;

import java.util.List;

import com.testyantra.lms.entities.LoanApplication;
import com.testyantra.lms.entities.LoanStatus;
import com.testyantra.lms.entities.LoanType;
import com.testyantra.lms.entities.User;

public interface UserDAO {

	// user operations
	public LoanApplication applyLoan(LoanApplication application);

	public User registerUser(User user);

	public User getUser(String userEmail);
	
	public User updateUser(User user);
	
	public LoanStatus getApplicationStatus(long applicationId);
	
	public User authenticate(String email,String password);
	
	public List<LoanType> getloantypes();

}
