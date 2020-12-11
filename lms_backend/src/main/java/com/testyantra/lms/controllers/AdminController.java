package com.testyantra.lms.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.testyantra.lms.dto.ResponseDTO;
import com.testyantra.lms.entities.Employee;
import com.testyantra.lms.entities.Role;
import com.testyantra.lms.service.AdminService;

@RestController
@RequestMapping(value = "/admin")
@CrossOrigin("http://localhost:3000")
public class AdminController {

	@Autowired
	public AdminService service;

	@PostMapping(value = "/employee", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseDTO addEmployee(@RequestBody Employee employee) {
		ResponseDTO response = new ResponseDTO();
		response.setResponse(service.addEmployee(employee));
		return response;
	}

	@GetMapping(value = "/employee/{searchText}", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public ResponseDTO getEmployee(@PathVariable String searchText) {
		ResponseDTO response = new ResponseDTO();
		response.setResponse(service.getEmployee(searchText));
		return response;

	}
	@GetMapping(value = "/employees/{id}", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public ResponseDTO getEmployee(@PathVariable Integer id) {
		ResponseDTO response = new ResponseDTO();
		response.setResponse(service.getEmployeeById(id));
		return response;

	}
	
	

	@PutMapping(value = "/employee", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseDTO updateEmployee(@RequestBody Employee employee) {
		ResponseDTO response = new ResponseDTO();
		response.setResponse(service.updateEmployee(employee));
		return response;
	}

	@DeleteMapping(value = "/employee/{id}", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public ResponseDTO deleteEmployee(@PathVariable int id) {
		ResponseDTO response = new ResponseDTO();
		response.setResponse(service.deleteEmployee(id));
		return response;
	}

	@PostMapping(value = "/employees", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
	public ResponseDTO getAllEmployees() {
		ResponseDTO response = new ResponseDTO();
		response.setResponse(service.getAllEmployees());
		return response;
	}

	@PostMapping(value = "/manage-roles", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public ResponseDTO addRole(@RequestBody Role role) {
		ResponseDTO response = new ResponseDTO();
		response.setResponse(service.addRole(role));
		return response;
	}

	@PutMapping(value = "/manage-roles", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public ResponseDTO updateRole(@RequestBody Role role) {
		ResponseDTO response = new ResponseDTO();
		response.setResponse(service.updateRole(role));
		return response;
	}
	
	@GetMapping(value = "/manage-roles/{id}", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public ResponseDTO getRole(@PathVariable int id) {
		ResponseDTO response = new ResponseDTO();
		response.setResponse(service.getRole(id));
		return response;
	}
	
	@GetMapping(value = "/roles", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public ResponseDTO getAllRoles() {
		ResponseDTO response = new ResponseDTO();
		response.setResponse(service.getAllRoles());
		return response;
	}
	
	
	
	
	

}
