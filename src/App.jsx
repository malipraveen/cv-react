import Left from "./sections/Left";
import Right from "./sections/Right";
import { footer } from "./sections/data";

function App() {
  return (
    <html data-theme="forest">
      <body class="h-[297mm] w-[210mm] p-5 m-auto">
        {/* <h1 class="text-4xl font-bold mb-5 flex flex-row gap-5 items-start"><span>Fei Li</span> <span class="text-3xl">李飞</span></h1>
        <p className="mb-3">{headline}</p> */}
        <div div class="flex flex-row gap-3">
          <Left />
          <Right />
        </div>
        <footer class="text-left pl-2 pt-5 text-sm text-gray-500">{footer}</footer>
      </body>
    </html>
  );
}

export default App;
