<script setup lang="ts">
import { mySkills } from './Data';

const imageSrc = (selectedItem: string) => {
    return new URL(`../assets/icons/${selectedItem}`, import.meta.url).href;
}

</script>

    
<template>
    <section class="bg-gray-50">
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md py-14">
            <h2 class="text-3xl font-bold sm:text-4xl text-center tracking-wider underline" id="two">About</h2>
            <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                <div class="mx-auto lg:max-w-lg lg:mx-0">
                    <h3 class="text-2xl text-center lg:text-left font-bold sm:text-3xl">About Me</h3>
                    <p class="mt-4 font-semibold text-gray-600">
                        A <span class="text-black">CS Graduate </span> and an adept Frontend Web Developer with a passion
                        for building user-friendly and engaging web applications. I have experience working on a variety of
                        <span class="text-black">projects</span>, from small personal
                        websites to large-scale enterprise applications.<br /><br />
                        In addition to my technical skills, I'm also a team player and I'm always eager to learn new things.
                        I'm also passionate about accessibility and I strive to make all of my interfaces accessible to
                        <span class="text-black">everyone.</span> <br /><br />
                        I am open to <span class="text-black">job</span> opportunities where I can use my skills and
                        experience
                        to make a
                        significant contribution, while also learning and growing professionally. If you have a relevant
                        opportunity, please do not hesitate to <span class="text-black">contact</span> me.
                    </p>
                </div>
                <div>
                    <h3 class="text-2xl text-center lg:text-left font-bold sm:text-3xl">My Skills</h3>
                    <div class="grid grid-cols-2 gap-4 sm:grid-cols-5 mt-4">
                        <div v-for="skill in mySkills"
                            class="group relative inline-block text-sm font-medium focus:outline-none focus:ring active:text-indigo-500"
                            :key="skill.name">
                            <span
                                class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

                            <span class="relative block border border-current font-bold text-center bg-white py-3">
                                <img class="inline-block" width="20" height="20" :src="imageSrc(skill.location)"
                                    :alt="skill.alt">
                                {{ skill.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped></style>