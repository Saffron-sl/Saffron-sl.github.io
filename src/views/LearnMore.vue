<script setup>
const sections = [
  {
    title: 'About Saffron',
    content: 'Saffron is your comprehensive platform for senior care services, designed to make life easier and more enjoyable for seniors and their caregivers.'
  },
  {
    title: 'Our Mission',
    content: 'We strive to create a connected community where seniors can easily access quality healthcare, essential services, and engage with others who share their interests.'
  },
  {
    title: 'How It Works',
    content: 'Browse our carefully curated network of healthcare providers, service professionals, and community resources. Schedule appointments, make purchases, and connect with others - all in one place.'
  },
  {
    title: 'For Healthcare Providers',
    content: 'Join our network to connect with seniors seeking quality care. We provide the platform and tools you need to serve this growing community effectively.'
  }
]

const resources = [
  {
    title: 'Senior Care Guide',
    description: 'Comprehensive guide to understanding and accessing senior care services'
  },
  {
    title: 'Healthcare Navigation',
    description: 'Tips for making the most of your healthcare appointments and services'
  },
  {
    title: 'Community Guidelines',
    description: 'Learn about our community values and how to participate effectively'
  }
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Learn More About Saffron</h1>

    <!-- Main Sections -->
    <div class="space-y-12">
      <div
        v-for="section in sections"
        :key="section.title"
        class="bg-white rounded-lg shadow-sm p-8"
      >
        <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ section.title }}</h2>
        <p class="text-lg text-gray-600">{{ section.content }}</p>
      </div>
    </div>

    <!-- Resources Section -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Helpful Resources</h2>
      <div class="grid gap-6 md:grid-cols-3">
        <div
          v-for="resource in resources"
          :key="resource.title"
          class="bg-white rounded-lg shadow-sm p-6"
        >
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ resource.title }}</h3>
          <p class="text-gray-600">{{ resource.description }}</p>
          <button class="btn btn-secondary w-full mt-4">
            Read More
          </button>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="mt-12 bg-white rounded-lg shadow-sm p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
      <p class="text-lg text-gray-600 mb-6">
        Have questions about Saffron? We're here to help! Reach out to our support team for assistance.
      </p>
      <button class="btn btn-primary">
        Contact Support
      </button>
    </div>
  </div>
</template>