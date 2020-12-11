package com.mv.lms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mv.lms.dao.EmployeeDAO;
import com.mv.lms.entities.Client;
import com.mv.lms.entities.Loan;
import com.mv.lms.entities.LoanApplication;
import com.mv.lms.entities.LoanStatus;
import com.mv.lms.entities.LoanType;
import com.mv.lms.entities.OverdueLoan;
import com.mv.lms.exceptions.LoanException;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	public EmployeeDAO employeedao;

	@Override
	public LoanApplication getApplication(Long applicationId) {
		LoanApplication applicationDto = employeedao.getApplication(applicationId);
		if (applicationDto != null) {
			return applicationDto;
		} else {
			throw new LoanException("Unable to get application");
		}
	}

	@Override
	public LoanStatus updateApplicationStatus(Long id) {
		LoanStatus statusDto = employeedao.updateApplicationStatus(id);
		if (statusDto != null) {
			return statusDto;
		} else {
			throw new LoanException("unable to update application status");
		}
	}

	@Override
	public List<LoanApplication> getPendingApplications() {
		List<LoanApplication> list = employeedao.getPendingApplications();
		if (!list.isEmpty()) {
			return list;
		} else {
			throw new LoanException("unable to fetch loans");
		}
	}

	@Override
	public List<LoanApplication> getApprovedApplications() {
		List<LoanApplication> list = employeedao.getApprovedApplications();
		if (!list.isEmpty()) {
			return list;
		} else {
			throw new LoanException("unable to fetch loans");
		}
	}

	@Override
	public Loan addLoan(Loan loan) {
		Loan loanDto = employeedao.addLoan(loan);
		if (loanDto != null) {
			return loanDto;
		} else {
			throw new LoanException("unable to add loan");
		}
	}

	@Override
	public Loan getLoanDetails(long loanId) {
		Loan loanDto = employeedao.getLoanDetails(loanId);
		if (loanDto != null) {
			return loanDto;
		} else {
			throw new LoanException("unable to get loan details");
		}
	}

	@Override
	public Loan updateLoanDetails(Loan loan) {
		Loan loanDto = employeedao.updateLoanDetails(loan);
		if (loanDto != null) {
			return loanDto;
		} else {
			throw new LoanException("unable to update loan details");
		}
	}

	@Override
	public Client addClient(Client client) {
		Client clientDto = employeedao.addClient(client);
		if (clientDto != null) {
			return clientDto;
		} else {
			throw new LoanException("unable to add client");
		}
	}

	@Override
	public Client updateClient(Client client) {
		Client clientDto = employeedao.updateClient(client);
		if (clientDto != null) {
			return clientDto;
		} else {
			throw new LoanException("unable to add client");
		}
	}

	@Override
	public Client deleteClient(long clientid) {
		Client clientDto = employeedao.deleteClient(clientid);
		if (clientDto != null) {
			return clientDto;
		} else {
			throw new LoanException("unable to delete client");
		}
	}

	@Override
	public Client getClient(long clientid) {
		Client clientDto = employeedao.getClient(clientid);
		if (clientDto != null) {
			return clientDto;
		} else {
			throw new LoanException("Unable to get client");
		}
	}

	@Override
	public List<Client> getAllClients() {
		List<Client> list = employeedao.getAllClients();
		if (!list.isEmpty()) {
			return list;
		} else {
			throw new LoanException("unable to get clients");
		}
	}

	@Override
	public LoanType addLoanType(LoanType loantype) {
		LoanType type = employeedao.addLoanType(loantype);
		if (type != null) {
			return type;
		} else {
			throw new LoanException("unable to add clients");
		}
	}

	@Override
	public LoanType updateLoanType(LoanType loantype) {
		LoanType type = employeedao.updateLoanType(loantype);
		if (type != null) {
			return type;
		} else {
			throw new LoanException("unable to update loan type");
		}
	}

	@Override
	public LoanType removeLoanType(int loanTypeId) {
		LoanType type = employeedao.removeLoanType(loanTypeId);
		if (type != null) {
			return type;
		} else {
			throw new LoanException("unable to remove loan type");
		}
	}

	@Override
	public LoanType getLoanType(int loanTypeId) {
		LoanType type = employeedao.getLoanType(loanTypeId);
		if (type != null) {
			return type;
		} else {
			throw new LoanException("Unable to get loan type");
		}
	}

	@Override
	public OverdueLoan getOverDueLoan(long loanId) {
		OverdueLoan odloan = employeedao.getOverDueLoan(loanId);
		if (odloan != null) {
			return odloan;
		} else {
			throw new LoanException("unable to get overdue loan");
		}
	}

	@Override
	public OverdueLoan addOverDueLoan(OverdueLoan overdueloan) {
		OverdueLoan odloan = employeedao.addOverDueLoan(overdueloan);
		if (odloan != null) {
			return odloan;
		} else {
			throw new LoanException("unable to add overdue loan");
		}
	}

	@Override
	public OverdueLoan updateOverDueLoan(OverdueLoan overdueloan) {
		OverdueLoan odloan = employeedao.updateOverDueLoan(overdueloan);
		if (odloan != null) {
			return odloan;
		} else {
			throw new LoanException("unable to update overdue loan");
		}
	}

	@Override
	public OverdueLoan removeOverDueLoan(long loanId) {
		OverdueLoan odloan = employeedao.removeOverDueLoan(loanId);
		if (odloan != null) {
			return null;
		} else {
			throw new LoanException("Unable to remove loan");
		}
	}

	@Override
	public List<OverdueLoan> getAllOverDueLoans() {
		List<OverdueLoan> loanlist = employeedao.getAllOverDueLoans();
		if (!loanlist.isEmpty()) {
			return loanlist;
		} else {
			throw new LoanException("unable to get all loans");
		}
	}

	@Override
	public Loan deleteLoanDetails(long id) {
		Loan loan = employeedao.deleteLoanDetails(id);
		if (loan != null) {
			return loan;
		} else {
			throw new LoanException("unable to delete loan");
		}
	}

	@Override
	public List<LoanType> getAllLoanTypes() {
		List<LoanType> list = employeedao.getAllLoanTypes();
		if (!list.isEmpty()) {
			return list;
		} else {
			throw new LoanException("Unable to get Loan Types");
		}
	}

	@Override
	public List<LoanApplication> getAllApplications() {
		List<LoanApplication> list = employeedao.getAllApplications();
		if (!list.isEmpty()) {
			return list;
		} else {
			throw new LoanException("Unable to fetch all loans applications");
		}
	}

	@Override
	public LoanApplication deleteApplication(Long applicationId) {
		LoanApplication app = employeedao.deleteApplication(applicationId);
		if (app != null) {
			return app;
		} else {
			throw new LoanException("Unable to delete application");
		}
	}

}
