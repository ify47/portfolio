<script setup lang="ts">
import { projectLists } from './Data';

const imageSrc = (selectedItem: string) => {
    return new URL(`../assets/projects/${selectedItem}`, import.meta.url).href;
}

</script>
        
<template>
    <section class="w-full bg-gray py-16 md:py-20 2xl:py-14">
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md">
            <div class="flex flex-col items-center gap-4">
                <h2 class="text-3xl font-bold sm:text-4xl text-center tracking-wider underline" id="three">Projects</h2>
                <p class="text-normal text-lg md:text-xl max-w-xl text-center font-semibold">Here you will find some of the
                    personal
                    projects I have built:
                </p>
            </div>
            <div v-for="projects in projectLists"
                class="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row"
                :key="projects.name">
                <div class="flex items-center  justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-l-xl md:border-r"
                    :class="projects.style && 'md:order-last'">
                    <a target="_blank" class="" :href="projects.site"><img :alt="projects.alt" loading="lazy" width="1711"
                            height="1141" decoding="async" data-nimg="1"
                            class="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                            style="color:transparent;object-fit:cover" :src="imageSrc(projects.image)"></a>
                </div>
                <div class="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12 " :class="projects.style && 'md:order-first'">
                    <p class=" text-lg md:text-xl font-semibold text-gray-900">{{ projects.name }}</p>
                    <p class="text-normal text-gray-600 font-semibold text-base">{{ projects.description }}</p>
                    <div class="flex flex-wrap gap-2">
                        <div v-for="tools in projects.tools"
                            class="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                            <p class="text-normal text-sm font-medium">{{ tools }}</p>
                        </div>

                    </div>
                    <div class="flex">
                        <a target="_blank" class="self-start rounded-lg p-1.5 hover:bg-gray-50 [&;_svg]:stroke-gray-500"
                            :href="projects.site"><img width="24" height="24" src="../assets/icons/web.svg"
                                alt="Web Icon"></a>
                        <a target="_blank" class="self-start rounded-lg p-1.5 hover:bg-gray-50 [&;_svg]:stroke-gray-500"
                            :href="projects.github"><img width="24" height="24" src="../assets/icons/github.svg"
                                alt="Github Icon"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped></style>