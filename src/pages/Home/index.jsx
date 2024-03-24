import React from "react";
import useSWR from "swr";
import TodoItem from "../../components/TodoItem";
import AddItem from "../../components/AddItem";

const apiUrl = "http://localhost:8098/api/todo";
const allTodosEndpoint = `${apiUrl}/all`;

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
	const { data, error, mutate } = useSWR(allTodosEndpoint, fetcher);

	const handleUpdate = (todo, newDetail) => {
		if (newDetail === "") {
			alert("Please enter a detail.");
			return;
		}

		if (window.confirm("Are you sure you want to update this todo?")) {
			fetch(`${apiUrl}/update`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title: todo.title, detail: newDetail }),
			})
				.then(() => {
					mutate();
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		}
	};

	const handleComplete = (todo) => {
		if (
			window.confirm("Are you sure you want to mark this todo as completed?")
		) {
			fetch(`${apiUrl}/update`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title: todo.title }),
			})
				.then(() => {
					mutate();
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		}
	};

	const handleDelete = (todo) => {
		if (window.confirm("Are you sure you want to delete this todo?")) {
			fetch(`${apiUrl}/delete`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title: todo.title }),
			})
				.then(() => {
					mutate();
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		}
	};

	const handleAdd = ({ title, detail }) => {
		if (title === "" || detail === "") {
			alert("Please enter a title and detail.");
			return;
		}

		if (window.confirm("Are you sure you want to add this todo?")) {
			fetch(`${apiUrl}/add`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title, detail }),
			})
				.then(() => {
					mutate();
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		}
	};

	return (
		<div className="flex flex-col justify-center items-center mt-10">
			<h1 className="text-2xl font-bold text-slate-900 mb-5">Todo List</h1>
			<div className="w-[24.5rem] divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 mb-10">
				{error && (
					<div className="text-center p-4">
						<p>Error fetching todos.</p>
						<p>{error.message}</p>
					</div>
				)}
				{!error && !data && (
					<div className="text-center p-4">
						<div className="animate-pulse">Loading...</div>
					</div>
				)}
				{data && data.length === 0 && (
					<div className="text-center p-4">No todos found.</div>
				)}
				{data &&
					data.map((todo) => (
						<TodoItem
							key={todo.title}
							todo={todo}
							updateHandle={(newDetail) => handleUpdate(todo, newDetail)}
							completeHandle={() => handleComplete(todo)}
							deleteHandle={() => handleDelete(todo)}
						/>
					))}
				<AddItem addHandle={handleAdd} />
			</div>
		</div>
	);
};

export default Home;
