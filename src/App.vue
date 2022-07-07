<template>
  <div class="portfolio flex justify-center items-center h-screen bg-light-blue shadow-lg">
    <div class="bg-light-gray h-5/6 w-5/6 rounded-xl p-12 ">
      <div class="flex gap-24 pt-44">
        <div class="flex w-1/12 flex-col gap-4 mt-16">
          <SocialIcon icon="fa-brands fa-github" url="https://github.com/simon-isler"></SocialIcon>
          <SocialIcon icon="fa-brands fa-linkedin-in"
                      url="https://www.linkedin.com/in/simon-isler-940279166/"></SocialIcon>
        </div>
        <div class="flex w-3/4">
          <div>
            <h1 class="text-4xl font-semibold pb-3">Hi, I'm Simon</h1>
            <p class="text-xl font-normal text-gray-500">Software Developer</p>
            <div class="pt-6 w-full">
              <p>
                I'm a Software Developer based in Zurich. I'm currently studying at the University of Applied Sciences
                in
                Winterthur.
                Next to my studies, I'm working part-time
                <a href="https://renuo.ch" class="text-brown underline underline-offset-2 font-medium">@ Renuo</a>.
              </p>

              <a href="mailto:mail@simonisler.ch" class="rounded-md bg-blue text-slate-50 p-3 flex mt-8 w-1/5">
                Contact me
                <font-awesome-icon icon="fa-solid fa-fighter-jet" class="pl-3"></font-awesome-icon>
              </a>
            </div>
          </div>
          <div class="w-1/2">
            <img src="./assets/portrait.png" alt="Portrait" class="h-3/4 rounded-full">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcon from "@/components/SocialIcon";

export default {
  name: 'App',
  components: {SocialIcon}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.portfolio {
  font-family: 'Poppins', sans-serif;
}
</style>
