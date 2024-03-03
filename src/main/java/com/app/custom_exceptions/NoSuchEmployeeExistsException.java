package com.app.custom_exceptions;

public class NoSuchEmployeeExistsException extends RuntimeException {
	public NoSuchEmployeeExistsException(String msg) {
		super(msg);
	}

}
