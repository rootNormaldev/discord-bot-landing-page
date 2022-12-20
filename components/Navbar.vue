<template>
    <nav class="sticky z-10 top-0 border-b border-gray-200 backdrop-blur bg-white/50 text-black shadow-lg md:block px-2 sm:px-4 py-2.5 rounded">
        <div class="container flex flex-wrap items-center justify-around mx-auto">
            <a href="https://flowbite.com/" class="flex items-center">
                <img src="https://dankmemer.lol/img/memer.png" class="h-16 mr-3 sm:h-6 rounded-lg" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap">Dank Meme</span>
            </a>

            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                <li>
                <button class="text-lg block py-2 pl-3 pr-4 border-b duration-300 border-b-green-500 text-black bg-white rounded sm:rounded-full md:bg-transparent md:text-green-500 md:p-0" aria-current="page">หน้าแรก</button>
                </li>
                <li>
                <button class="text-lg block py-2 pl-3 pr-4 duration-300 text-black rounded md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 md:dark:hover:text-white md:dark:hover:bg-transparent">เกี่ยวกับเรา</button>
                </li>
                <li>
                <button @click="scroll('Features')" class="text-lg block py-2 pl-3 pr-4 duration-300 text-black rounded md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 md:dark:hover:text-white md:dark:hover:bg-transparent">ฟั่งชันของเรา</button>
                </li>
                <li>
                <button @click="scroll('DevCard')" class="text-lg block py-2 pl-3 pr-4 duration-300 text-black rounded md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 md:dark:hover:text-white md:dark:hover:bg-transparent">ทีมผู้พํฒนา</button>
                </li>
                <li>
                <button class="text-lg block py-2 pl-3 pr-4 duration-300 text-black rounded md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 md:dark:hover:text-white md:dark:hover:bg-transparent">พันธมิตร</button>
                </li>
            </ul>
            </div>
            <div class="hidden md:block" id="navbar-default">
                <ul class="flex flex-col p-4 md:flex-row md:space-x-4">
                    <li>
                        <a class="text-lg block py-2 pl-3 pr-4 duration-300 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            <i class="fa-solid fa-right-to-bracket"></i>
                            เข้าสู่ระบบ
                        </a>
                    </li>
                    <li>
                        <a @click="signup" class="text-lg block py-2 pl-3 pr-4 duration-300 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            <i class="fa-solid fa-heart"></i>
                            สมัครบัญชี
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { toast } from './swal';

export default {
    methods:{
        signup(){
            toast.fire({
                icon:'error',
                text:'สมัครบัญชีไม่สำเร็จ'
            })
        },
        scroll(id){  
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        })
        }
    }
}
</script>