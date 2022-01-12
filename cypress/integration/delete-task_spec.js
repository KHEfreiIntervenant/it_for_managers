import { render, screen, fireEvent } from "@testing-library/react";

describe("Edit Task", () => {
	it("user can edit a task", () => {
		cy.visit("http://localhost:8081/");
		//select task
		const list = cy.findByRole("list").within(() => {
			cy.get("li").click();
		});
		// within(list).getByRole('listitem');
		// cy.get('li [data-index="0"]').click();
		cy.get("#edit-task").click();
		// edit title
		cy.findByLabelText("Title").type("_");
		// edit description
		cy.findByLabelText("Description").type("_");
		// save task
		cy.findByRole("button", {
			name: /update/i,
		}).click();
		cy.findByRole("link", {
			name: /tasks/i,
		}).click();
	});
});
