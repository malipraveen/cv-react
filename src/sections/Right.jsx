import { education, experience, projects } from "./data";

function Projects() {
  return (
    <div class="bg-primary text-white rounded-box flex flex-col items-start py-3 px-4">
      <h2 class="text-2xl mb-2">Projects</h2>
      {projects.map((item) => (
        <div>
          <div class="flex flex-row gap-2 items-center">
            <img class="w-6 h-6 rounded-lg" src={item.icon} />
            <a
              class="text-lg font-bold text-info-content underline"
              href={item.link}
              title={item.name}
              target="_blank"
            >
              {item.name}
            </a>
          </div>

          <div class="ml-6">
            {item.description.map((p) => (
              <p class="">
                <i class="ri-fire-line text-orange-500"></i> {p}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <div class="bg-primary text-white rounded-box flex flex-col items-start py-3 px-5">
      <h2 class="text-2xl mb-2">Relevant Experience</h2>
      {experience.map((item) => (
        <div class="mb-3 flex flex-row gap-2 items-start">
          <img class="h-12 w-12 rounded-2xl" src={item.icon} />
          <div class="flex flex-col">
            <div class="flex flex-row justify-between items-center">
              <div class="text-xl font-bold font-mono">{item.company}</div>
              <div class="text-sm text-primary-content">{item.loc}</div>
            </div>

            <div class="flex flex-row justify-between items-center">
              <div class="text-lg font-bold">{item.pos}</div>
              <div class="text-sm text-primary-content">{item.time}</div>
            </div>

            <div>
              {item.description.map((p) => (
                <p class="">{p}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Education() {
  return (
    <div class="bg-primary text-white rounded-box flex flex-col items-start py-3 px-5">
      <h2 class="text-2xl mb-2">Education</h2>
      {education.map((item) => (
        <div class="mb-3 flex flex-row gap-2 items-start">
          <img class="h-12 w-12" src={item.icon} />
          <div class="flex flex-col">
            <div class="flex flex-row justify-between items-center">
              <div class="text-xl font-bold">{item.school}</div>
              <div class="text-sm text-primary-content">{item.loc}</div>
            </div>

            <div class="flex flex-row justify-between items-center">
              <div class="text-lg font-bold">{item.degree}</div>
              <div class="text-sm text-primary-content">{item.time}</div>
            </div>

            <div>
              {item.description.map((p) => (
                <p class="w-[28rem]">{p}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Right() {
  return (
    <div class="flex flex-col gap-3">
      <Projects />
      <Experience />
      <Education />
    </div>
  );
}
