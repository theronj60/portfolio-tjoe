<template>
  <header class="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 sm:mx-5">
  
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div class="w-full text-center">
        <strong class="sm:m-0 ml-6 text-xl font-semibold">
          Theron Joe
        </strong>
      </div>
      <div class="sm:hidden">
        <button @click="open = !open" type="button" class="block text-gray-900 hover:text-gray-400 focus:text-gray-400 focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="open" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!open" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="pt-2 pb-4 px-4 sm:bg-white bg-gray-200 text-center sm:flex sm:p-0" :class="open ? 'block' : 'hidden'">
      <a class="px-2 py-1 block sm:inline-block sm:mt-0 sm:ml-4 font-semibold rounded hover:bg-gray-400" href="/">Home</a>
      <a class="mt-1 px-2 py-1 block sm:inline-block sm:mt-0 sm:ml-4 font-semibold rounded hover:bg-gray-400" href="/about">About</a>
      <a class="mt-1 px-2 py-1 block sm:inline-block sm:mt-0 sm:ml-4 font-semibold rounded hover:bg-gray-400" href="/menu">Menu</a>
      <a class="mt-1 px-2 py-1 block sm:inline-block sm:mt-0 sm:ml-4 font-semibold rounded hover:bg-gray-400" href="/order">Order</a>
      <a class="mt-1 px-2 py-1 block sm:inline-block sm:mt-0 sm:ml-4 font-semibold rounded hover:bg-gray-400" href="/contact">Contact</a>
    </div>
  
</header>
</template>

<script>


export default {
    data: () => ({
        open: false
    }),
}
</script>


