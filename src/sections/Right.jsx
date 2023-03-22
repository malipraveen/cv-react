import { education, experience, projects } from "./data";
import { projectTitle, experienceTitle, educationTitle } from "./data";


function Projects() {
  return (
    <div class="bg-primary text-white text-justify rounded-box flex flex-col items-start py-3 px-4">
      <h2 class="text-2xl mb-5">{projectTitle}</h2>
      {projects.map((item) => (
        <div>
          <div class="flex flex-row flex-wrap gap-2 items-center">
            <img class="w-6 h-6 rounded-lg" src={item.icon} />
            <a
              class="text-lg font-bold underline text-info-content"
              href={item.link}
              title={item.name}
              target="_blank"
            >
              {item.name}
            </a>
            {/* {item.techstack.map(tech => <div class="badge badge-outline">{tech}</div>)} */}
          </div>

          <div class="ml-6">
            {item.description.map((p) => (
              <p class="">
              <i class="ri-flashlight-line text-[#171212] font-bold"></i> {p}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// text-orange-500

function Experience() {
  return (
    <div class="bg-primary text-white rounded-box flex flex-col items-start py-3 px-5">
      <h2 class="text-2xl mb-5">{experienceTitle}</h2>
      {experience.map((item) => (
        <div class="flex flex-row gap-2 items-start">
          <img class="h-12 w-12 rounded-2xl" src={item.icon} />
          <div class="flex flex-col">
            <div class="flex flex-row justify-between items-center">
              <div class="text-xl font-bold">{item.company}</div>
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
      <h2 class="text-2xl mb-5">{educationTitle}</h2>
      {education.map((item) => (
        <div class="mb-1 flex flex-row gap-2 items-start">
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
    <div class="flex flex-col gap-3 pt-3">
      <Projects />
      <Experience />
      <Education />
    </div>
  );
}
