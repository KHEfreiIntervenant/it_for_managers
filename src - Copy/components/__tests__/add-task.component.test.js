import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import user from "@testing-library/user-event";
import { AddTask } from "../add-task.component";

it("on submit is called when form fields are filled", () => {
	const onSubmit = jest.fn();

	const rendered = render(<AddTask />);
	const title = screen.getByLabelText("Title");
	user.type(title, "Task 1");

	const description = screen.getByLabelText("Description");
	user.type(description, "Description 1");

	screen.getByText("Submit");
	expect(onSubmit).toHaveBeenCalled();
});
