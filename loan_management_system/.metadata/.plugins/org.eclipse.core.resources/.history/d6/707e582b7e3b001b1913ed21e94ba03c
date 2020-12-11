package com.mv.lms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mv.lms.dao.UserDAO;
import com.mv.lms.entities.LoanApplication;
import com.mv.lms.entities.LoanStatus;
import com.mv.lms.entities.LoanType;
import com.mv.lms.entities.User;
import com.mv.lms.exceptions.LoanException;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	public UserDAO userdao;

	@Override
	public LoanApplication applyLoan(LoanApplication application) {
		LoanApplication applicationDto = userdao.applyLoan(application);
		if (applicationDto != null) {
			return applicationDto;
		} else {
			throw new LoanException("unable to apply loan please try after sometime");
		}
	}

	@Override
	public User registerUser(User user) {
		User userDto = userdao.registerUser(user);
		if (userDto != null) {
			return userDto;
		} else {
			throw new LoanException("unable to register user");
		}
	}

	@Override
	public User getUser(String userEmail) {
		User userDto = userdao.getUser(userEmail);
		if (userDto != null) {
			return userDto;
		} else {
			throw new LoanException("unable to get user");
		}
	}

	@Override
	public LoanStatus getApplicationStatus(long applicationId) {
		LoanStatus status = userdao.getApplicationStatus(applicationId);
		if (status != null) {
			return status;
		} else {
			throw new LoanException("Unable to get application status");
		}
	}

	@Override
	public User authenticate(String email, String password) {
		User user = userdao.authenticate(email, password);
		if (user != null) {
			return user;
		} else {
			throw new LoanException("Unable to get user");
		}
	}

	@Override
	public List<LoanType> getLoanTypes() {
		List<LoanType> list = userdao.getloantypes();
		if (!list.isEmpty()) {
			return list;
		} else {
			throw new LoanException("Unable to get Loan Types");
		}
	}

	@Override
	public User updateUser(User user) {
		User user1 = userdao.updateUser(user);
		if (user1 != null) {
			return user1;
		} else {
			throw new LoanException("Unable to update User");
		}

	}

}
