import React from "react";

interface TodoFormProps {
  onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
  // const [title, setTitle] = React.useState<string>("");
  const ref = React.useRef<HTMLInputElement>(null)

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(e.target.value)
  // };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter'){
      onAdd(ref.current!.value);
      ref.current!.value = ''
        // console.log(title)
        // setTitle('')
    }
  }

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        onKeyPress={keyPressHandler}
        // value={title}
        ref={ref}
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
