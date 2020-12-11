package com.testyantra.lms.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;
import lombok.Getter;

@Data
public class ResponseDTO {

	@Getter
	private boolean error;

	private Object response;

}
