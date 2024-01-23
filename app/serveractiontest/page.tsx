const ServerActionTest = () => {
  const sayHello = async () => {
    "use server";
    console.log("Hello");
  };

  return (
    <div>
      <form action={sayHello}>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="desc" />
        <input type="text" placeholder="slug" />
        <input type="text" placeholder="userId" />
        <button>Create</button>
      </form>
    </div>
  );
};

export default ServerActionTest;
