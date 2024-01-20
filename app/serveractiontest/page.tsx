const ServerActionTest = () => {
  const sayHello = async () => {
    "use server";
    console.log("Hello");
  };

  return (
    <div>
      <form action={sayHello}>
        <button>Test Me</button>
      </form>
    </div>
  );
};

export default ServerActionTest;
