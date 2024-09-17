import Form from "./components/form/Form";
import GetErrorButton from "./components/GetErrorButton";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Form />
      <GetErrorButton />
    </div>
  );
}
