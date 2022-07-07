<template>
  <div class="portfolio flex justify-center items-center h-screen bg-light-blue shadow-lg">
    <div class="bg-light-gray h-7/8 md:h-5/6 w-5/6 rounded-xl p-2 md:p-8 lg:p-12 ">
      <div class="flex flex-row flex-wrap gap-2 md:gap-24 pt-2 pl-3 md:pl-0 md:pt-28 lg:pt-44">
        <div class="flex w-1/12 flex-row md:flex-col gap-4 mt-3 md:mt-16">
          <SocialIcon icon="fa-brands fa-github" url="https://github.com/simon-isler"></SocialIcon>
          <SocialIcon icon="fa-brands fa-linkedin-in"
                      url="https://www.linkedin.com/in/simon-isler-940279166/"></SocialIcon>
        </div>

        <div class="flex flex-col xl:flex-row md:w-3/4">
          <div>
            <h1 class="text-2xl md:text-4xl font-semibold pb-3">Hi, I'm Simon</h1>
            <p class="text-lg md:text-xl font-normal text-gray-500">Software Developer</p>
            <div class="pt-3 md:pt-6 w-full">
              <p>
                I'm a Software Developer based in Zurich. I'm currently studying at the University of Applied Sciences
                in Winterthur.
                Next to my studies, I'm working part-time
                <a href="https://renuo.ch" class="text-brown underline underline-offset-2 font-medium">@ Renuo</a>.
              </p>

              <a href="mailto:mail@simonisler.ch" class="rounded-md bg-blue text-slate-50 p-3 flex mt-3 md:mt-8 w-40 lg:w-40">
                Contact me
                <font-awesome-icon icon="fa-solid fa-fighter-jet" class="pl-3"></font-awesome-icon>
              </a>
            </div>
          </div>

          <div class="flex justify-center mt-5 lg:mt-0 w-full">
            <img src="./assets/portrait.png" alt="Portrait" class="w-52 md:w-64 rounded-full">
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
