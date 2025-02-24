<script setup>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Care Connect', href: '/care-connect' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Community', href: '/community' },
  { name: 'Services', href: '/services' },
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="bg-white shadow-sm">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <router-link to="/" class="text-2xl font-bold text-primary-600">
            Saffron
          </router-link>
        </div>
        
        <!-- Desktop navigation -->
        <div class="hidden md:flex md:items-center md:space-x-6">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="text-lg font-medium text-gray-700 hover:text-primary-600"
          >
            {{ item.name }}
          </router-link>
          <button class="btn btn-primary">
            Sign In
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
          <button class="mt-4 w-full btn btn-primary">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>