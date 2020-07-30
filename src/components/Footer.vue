<template>
  <footer>
    
    <div class="container mx-auto px-6 pt-10 pb-6">
      <div class="flex flex-wrap">
        <div class="w-full text-center">
          <h5 class="uppercase mb-6 font-bold">Social</h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-600 hover:text-orange-500"><font-awesome-icon icon="user-secret" /></a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-600 hover:text-orange-500"><font-awesome-icon :icon="['fab', 'facebook-square']" /></a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Twitter</a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>  
    <div>
      Footer Here
      {{ new Date().getFullYear() }} — <strong>Theron Joe</strong>
    </div> 
  </footer>   
</template>

<script>

export default {
    
}
</script>
