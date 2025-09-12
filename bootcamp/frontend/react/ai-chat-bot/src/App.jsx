import { useForm } from "react-hook-form";
import { questionAI } from "./actions/ai";
import { useState } from "react";

function App() {
  const [answer, setAnswer] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const answer = await questionAI(data.question);
    console.log(answer);
    setAnswer(answer);
    setValue("question", "");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        {answer && (
          <div
            className="p-4 w-1/2"
            dangerouslySetInnerHTML={{ __html: answer }}
          ></div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 max-auto ">
          <textarea
            onKeyDown={handleKeyDown}
            {...register("question", { required: true })}
            className="border border-white-500 shadow-md rounded-md w-full h-[100px] p-4 text-lg"
            placeholder="What type of song would you like to create?"
          ></textarea>
        </form>
        {isSubmitting && (
          <div className="mt-4 text-white-500">Submitting...</div>
        )}
      </div>
    </>
  );
}

export default App;
