<template>
  <footer>
    <ul class=" flex justify-center">
      <li class="my-2 mx-5">
        <a href="#" class="hover:underline text-gray-600 hover:text-orange-500"><font-awesome-icon :icon="['fab', 'github-square']" size="2x"/></a>
      </li>
      <li class="my-2 mx-5">
        <a href="#" class="hover:underline text-gray-600 hover:text-orange-500"><font-awesome-icon :icon="['fab', 'github-square']" size="2x"/></a>
      </li>
      <li class="my-2 mx-5">
        <a href="#" class="hover:underline text-gray-600 hover:text-orange-500"><font-awesome-icon :icon="['fab', 'instagram-square']" size="2x"/></a>
      </li>
      <li class="my-2 mx-5">
        <a href="#" class="hover:underline text-gray-600 hover:text-orange-500"><font-awesome-icon :icon="['fab', 'twitter-square']" size="2x"/></a>
      </li>
    </ul>
    <div class="text-center my-2">
      <p>Built using Vue and Tailwind CSS</p><strong> {{ new Date().getFullYear() }} </strong>
    </div> 
  </footer>   
</template>

<script>

export default {
    
}
</script>
