<script setup lang="ts">

const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = 'Resume.pdf';
    link.setAttribute('download', 'Resume.pdf'); //or any other extension
    document.body.appendChild(link);
    link.click();
}

</script>


<template>
    <section class="w-full bg-gray py-16 md:py-20 2xl:py-24">
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
            <div class="flex flex-col gap-12 md:flex-row">
                <div class="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
                    <div class="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
                        <img alt="My Photo" loading="lazy" width="1067" height="1067" decoding="async" data-nimg="1"
                            class="absolute z-10 h-[280px] w-[240px] border-8 border-white object-cover max-md:left-5 md:left-14 md:top-0 md:h-[320px] md:w-[280px]"
                            src="../assets/uniqueImage.jpg" />
                        <div
                            class="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]">
                        </div>
                    </div>
                </div>
                <div
                    class="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
                    <div class="flex flex-col gap-2">
                        <h2 class="font-extrabold text-4xl md:text-5xl md:tracking-[-0.02em]  text-gray-900" id="one">
                            HEY 👋, I'M
                            OFIKULU <span
                                class=" inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                                <ul class="block animate-text-slide-2 uppercase text-left [&_li]:block">
                                    <li>ifeanyi</li>
                                    <li>mark</li>
                                    <li aria-hidden="true">ifeanyi</li>
                                </ul>
                            </span> </h2>
                        <p class="text-normal font-semibold sm:max-w-lg text-base"> A Front-end web developer committed to
                            producing
                            visually
                            appealing user interfaces for websites and web apps.</p>

                        <div class="flex gap-1">
                            <a href="https://linkedin.com/in/ofikulu-ifeanyi" target="_blank"
                                class="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6">
                                <img width="24" height="24" src="../assets/icons/linkedin.svg" alt="LinkedIn Icon">
                            </a><a href="https://github.com/ify47" target="_blank"
                                class="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6">
                                <img width="24" height="24" src="../assets/icons/github.svg" alt="Github Icon">
                            </a>
                        </div>

                        <button v-on:click="downloadPdf()"
                            class="mt-8  rounded uppercase bg-indigo-600 w-[171px] p-3 text-sm/[0.8rem] font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
                            Download resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped></style>