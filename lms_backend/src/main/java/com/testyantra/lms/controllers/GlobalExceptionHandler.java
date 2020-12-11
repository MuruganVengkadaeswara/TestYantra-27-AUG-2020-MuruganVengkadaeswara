package com.testyantra.lms.controllers;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.testyantra.lms.dto.ResponseDTO;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler()
	ResponseDTO handler(Exception e) {
		ResponseDTO response = new ResponseDTO();
		response.setError(true);
		response.setResponse(e.getMessage());
		return response;
	}

}
