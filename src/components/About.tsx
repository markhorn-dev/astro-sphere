import { currentYear } from "@lib/utils";

export default function About() {
  return (
    <section class="animate">
      <article>
        <p>I am a <b><i>software engineer</i></b> with {currentYear - 2018} years of experience in the technology industry, {currentYear - 2020} of which as a <b><i>front-end developer</i></b>.</p>

        <p>Besides <b><i>front-end development</i></b>, I am also interested in <b><i>back-end development</i></b>, <b><i>functional programming</i></b>, <b><i>open-source</i></b>, and <b><i>security and privacy</i></b>.</p>
      </article>
    </section>
  )
}
