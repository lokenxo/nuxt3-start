<template>
  <div>
      <div class="bg-gray-50 pt-12 sm:pt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
             Hello guys
            </h2>
            <p class="mt-3 text-xl text-gray-500 sm:mt-4">
              This is tailwind UI (really i'm using a nuxt3 porting called windi because official tailwindUI it's currently WIP) https://github.com/nuxt/framework/discussions/751
            </p>
          </div>
        </div>
        <div class="mt-10 pb-12 bg-white sm:pb-16">
          <div class="relative">
            <div class="absolute inset-0 h-1/2 bg-gray-50" />
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="max-w-4xl mx-auto">
                <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Pepperoni
                    </dt>
                    <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                      100%
                    </dd>
                  </div>
                  <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      MY_ENV_VAR
                    </dt>
                    <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                      {{$config.myEnvVar}}
                    </dd>
                  </div>
                  <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      MY_OTHER_ENV_VAR
                    </dt>
                    <dd class="order-1 text-5xl font-extrabold text-indigo-600">
                      {{$config.myOtherEnvVar}}<br>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  //https://nuxtjs.org/docs/configuration-glossary/configuration-runtime-config/
  mounted() {
    console.log(this.$config.myEnvVar);
    console.log(this.$config.myOtherEnvVar);
  },
  setup() {
    return {
    }
  },
  data() {
    return {

    }
  }
}
</script>
