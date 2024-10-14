<script setup lang="ts">
import useClipboard from 'vue-clipboard3'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import emailjs from '@emailjs/browser'
import { ref, TextareaHTMLAttributes } from 'vue'
import { emailKey } from './Data';

const { toClipboard } = useClipboard()

const copy = async () => {
    const result = await toClipboard('ifeanyiofi@gmail.com')
    result ?
        toast.success('Copied!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
        })
        : null
}

const form = ref<string | HTMLFormElement>('')
const inputFieldReset = ref<string | null>(null);
const inputTextarea = ref<TextareaHTMLAttributes['value']>('')

const sendEmail = () => {
    emailjs.sendForm(emailKey.service, emailKey.template, form.value, emailKey.value)
        .then(() => {
            toast.success('Sent!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000,
            })
            inputFieldReset.value = ''
            inputTextarea.value = ''
        }, (error) => {
            console.log('FAILED...', error.text);
        });
}
</script>


<template>
    <section class="py-6 bg-gray-50">
        <h2 class="text-3xl font-bold sm:text-4xl text-center tracking-wider underline mb-12" id="four">Contact</h2>
        <div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div class="py-6 md:py-0 md:px-6 font-semibold">
                <h1 class="text-4xl font-bold">Get in touch</h1>
                <p class="pt-2 pb-4">Feel free to Contact me by submitting the form</p>
                <div class="space-y-4">
                    <p class="flex items-center font-semibold">
                        <img class="w-5 h-5 mr-2 sm:mr-6" width="20" height="20" src="../assets/icons/location.svg"
                            alt="Location Icon">
                        <span>United Kingdom</span>
                    </p>
                    <p class="flex items-center">
                        <img class="w-5 h-5 mr-2 sm:mr-6" width="20" height="20" src="../assets/icons/message.svg"
                            alt="Message Icon">
                        <span class="flex">ifeanyiofi@gmail.com <button aria-label="Copy" type="button" @click="copy"><img
                                    width="24" height="24" class="ml-1" src="../assets/icons/copy.svg"
                                    alt=""></button></span>
                    </p>
                </div>
            </div>
            <form class="flex flex-col py-6 space-y-6 md:py-0 md:px-6" ref="form" @submit.prevent="sendEmail">
                <label class="block">
                    <span class="mb-1">Full name</span>
                    <input name="name" type="text" :value="inputFieldReset"
                        class="block w-full p-2 rounded-md shadow-sm focus:ring focus:ri focus:ri" required>
                </label>
                <label class="block">
                    <span class="mb-1">Email address</span>
                    <input name="email" type="email" :value="inputFieldReset"
                        class="block w-full p-2 rounded-md shadow-sm focus:ring focus:ri focus:ri" required>
                </label>
                <label class="block">
                    <span class="mb-1">Message</span>
                    <textarea name="message" rows="3" :value="inputTextarea"
                        class="block w-full rounded-md focus:ring focus:ri focus:ri" required></textarea>
                </label>
                <button type="submit"
                    class="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri bg-indigo-600 text-white font-semibold focus:ri hover:ri">Submit</button>
            </form>
        </div>
    </section>
</template>


<style scoped></style>