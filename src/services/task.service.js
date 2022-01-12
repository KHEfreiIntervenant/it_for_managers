import http from "../http-common";

class TaskDataService {
	getAll() {
		return http.get("/findAll");
	}

	get(id) {
		return http.get(`/${id}`);
	}

	create(data) {
		return http.post("/create", data);
	}

	update(id, data) {
		return http.put(`/${id}`, data);
	}

	delete(id) {
		return http.delete(`/${id}`);
	}

	deleteAll() {
		return http.delete(`/`);
	}

	findByTitle(title) {
		return http.get(`/findAll?title=${title}`);
	}
}

export default new TaskDataService();
