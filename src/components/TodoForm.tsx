import React from "react";

const TodoForm: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value)
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter'){
        console.log(title)
    }
  }

  return (
    <div className="input-field mt2">
      <input
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        value={title}
        type="text"
        id="title"
        placeholder="Please write task name"
      />
      <label htmlFor="title" className="active">
        Please write task name
      </label>
    </div>
  );
};

export default TodoForm;
