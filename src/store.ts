import { types } from "mobx-state-tree";
import axios from "axios";
import { flow } from "mobx";
import { schema } from "normalizr";

const User = types.model("User", {
  id: types.identifier,
  email: types.string
});

const Todo = types.model("Todo", {
  id: types.identifier,
  name: types.string
  // responsible: types.reference(User)
});

const RootStore = types
  .model("RootStore", {
    todos: types.optional(
      types.model("Todos", {
        map: types.map(Todo)
      }),
      {}
    ),
    dictionaries: types.optional(
      types.model("Dictionaries", {
        users: types.map(User)
      }),
      {}
    )
  })
  .actions(self => ({
    load: flow(function*(params) {
      const data = yield axios(
        "https://my-json-server.typicode.com/safonchik/bp/todos"
      );
      store.todos.map.put(data);
      return data;
    })
  }));

export const UserSchema = new schema.Entity("User");
export const TodosSchema = new schema.Entity("todos", {
  responsible: [UserSchema]
});

const store = RootStore.create();

export default store;
