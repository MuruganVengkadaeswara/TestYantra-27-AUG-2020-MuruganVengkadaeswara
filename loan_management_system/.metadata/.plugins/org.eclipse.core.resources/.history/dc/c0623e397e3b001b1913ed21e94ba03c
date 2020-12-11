package com.mv.lms.dao;

import java.util.List;

import com.mv.lms.entities.LoanApplication;
import com.mv.lms.entities.LoanStatus;
import com.mv.lms.entities.User;
import com.mv.lms.entities.LoanType;

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
