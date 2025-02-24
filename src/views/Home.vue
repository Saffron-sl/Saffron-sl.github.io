<script setup>
import { ref } from 'vue'
</script>

<template>
  <main>
    <!-- Hero Section -->
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block">Your One-Stop Platform for</span>
            <span class="block text-primary-600">Senior Care Services</span>
          </h1>
          <p class="mx-auto mt-3 max-w-md text-xl text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl">
            Connect with healthcare providers, find essential services, and join a supportive community.
          </p>
          <div class="mx-auto mt-10 max-w-md sm:flex sm:justify-center md:mt-12">
            <div class="rounded-md shadow">
              <router-link
                to="/care-connect"
                class="btn btn-primary w-full sm:w-auto"
              >
                Find Care
              </router-link>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <router-link
                to="/learn-more"
                class="btn btn-secondary w-full sm:w-auto"
              >
                Learn More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="bg-gray-50 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">
            How We Can Help
          </h2>
        </div>
        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900">Care Connect</h3>
            <p class="mt-2 text-gray-600">Connect with healthcare providers, nurses, and specialized care services.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900">Marketplace</h3>
            <p class="mt-2 text-gray-600">Find affordable medications and medical equipment with easy delivery.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900">Community</h3>
            <p class="mt-2 text-gray-600">Connect with others, share experiences, and find support in our forums.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900">Services</h3>
            <p class="mt-2 text-gray-600">Access essential services from home improvement to legal assistance.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>