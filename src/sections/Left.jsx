import { headline, info } from "./data";
import { contactTitle, languageTitle, techstackTitle } from "./data";

function Section({ title, children }) {
  return (
    <div>
      <h2 class="text-2xl my-3 ml-0">{title}</h2>
      <div class="flex flex-col">{children}</div>
    </div>
  );
}

export default function Left() {
  return (
    <div class="">
    <h1 class="text-4xl font-bold mb-5">Fei Li <span class="text-3xl">李飞</span></h1>
    <p className="mb-3">{headline}</p>
      <Section title={contactTitle}>
        {info.contact.map((item) => (
          <a href={item.url} target="_blank">
            <button class="badge badge-primary gap-2 m-2">
              {item.icon} {item.name}
            </button>
          </a>
        ))}
      </Section>

      <Section title={languageTitle}>
        {info.language.map((item) => (
          <div class="flex flex-row items-center ml-2 my-1">
            <i class="ri-message-2-line"></i> <span class="ml-2">{item}</span>
          </div>
        ))}
      </Section>

      <Section title={techstackTitle}>
        {info.techstack.map((item) => (
          <div class="flex flex-row items-center m-2">
            <img class="h-5 w-5 rounded-md" src={item.icon} />{" "}
            <span class="ml-2">{item.name}</span>
          </div>
        ))}
      </Section>
    </div>
  );
}
