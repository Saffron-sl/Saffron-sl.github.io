<script setup>
import { ref } from 'vue'

const categories = [
  {
    name: 'Insurance',
    description: 'Find the right insurance coverage for your needs',
    icon: '🛡️'
  },
  {
    name: 'Home Improvements',
    description: 'Make your home safer and more comfortable',
    icon: '🏠'
  },
  {
    name: 'Commute',
    description: 'Transportation and mobility solutions',
    icon: '🚗'
  },
  {
    name: 'Gardening',
    description: 'Professional gardening and landscaping services',
    icon: '🌱'
  },
  {
    name: 'Legal',
    description: 'Legal advice and documentation services',
    icon: '⚖️'
  }
]

const selectedCategory = ref('')

const providers = ref([
  {
    id: 1,
    name: 'Senior Care Plus',
    category: 'Insurance',
    description: 'Comprehensive insurance plans tailored for seniors',
    rating: 4.8,
    contact: 'Contact for Quote'
  },
  {
    id: 2,
    name: 'Safe Home Solutions',
    category: 'Home Improvements',
    description: 'Specialized in senior-friendly home modifications',
    rating: 4.9,
    contact: 'Free Consultation'
  }
])
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Services</h1>

    <!-- Categories Grid -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
      <div
        v-for="category in categories"
        :key="category.name"
        class="bg-white rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
        @click="selectedCategory = category.name"
      >
        <div class="text-4xl mb-4">{{ category.icon }}</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ category.name }}</h3>
        <p class="text-gray-600">{{ category.description }}</p>
      </div>
    </div>

    <!-- Service Providers -->
    <div v-if="selectedCategory" class="space-y-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ selectedCategory }} Providers</h2>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="provider in providers.filter(p => p.category === selectedCategory)"
          :key="provider.id"
          class="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900">{{ provider.name }}</h3>
            <p class="text-gray-600 mt-2">{{ provider.description }}</p>
            <div class="mt-4 flex items-center justify-between">
              <span class="text-sm font-medium text-primary-600">★ {{ provider.rating }}/5</span>
            </div>
            <button class="btn btn-primary w-full mt-4">
              {{ provider.contact }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>