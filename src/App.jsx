import Left from "./sections/Left";
import Right from "./sections/Right";
import { headline } from "./sections/data";

function App() {
  return (
    <html data-theme="forest">
      <body class="h-[297mm] w-[210mm] p-5 m-auto">
        <h1 class="text-4xl font-bold mb-5">Fei Li</h1>
        <p className="mb-3">{headline}</p>
        <div div class="flex flex-row gap-3">
          <Left />
          <Right />
        </div>
        <footer class="absolute left-2 bottom-1 text-sm text-gray-500 mt-2 text-center">This resume is built with Vite + React. Go to <a title="cv repository" class="underline" href="https://github.com/lifeitech/cv-react">lifeitech/cv-react</a> for source code and latest info.</footer>
      </body>
    </html>
  );
}

export default App;
