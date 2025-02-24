<script setup>
import { ref } from 'vue'

const categories = [
  'Doctors',
  'Nurses',
  'Therapists',
  'Hospice'
]

const providers = ref([
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    category: 'Doctors',
    specialty: 'Primary Care',
    availability: 'Today',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    name: 'Nurse Emily Chen',
    category: 'Nurses',
    specialty: 'Home Care',
    availability: 'Tomorrow',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
])

const selectedCategory = ref('')
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Care Connect</h1>
    
    <!-- Search and Filter Section -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div class="grid gap-4 md:grid-cols-2">
        <div>
          <label for="search" class="block text-lg font-medium text-gray-700 mb-2">
            Search Providers
          </label>
          <input
            type="text"
            id="search"
            class="input"
            placeholder="Search by name or specialty"
          >
        </div>
        <div>
          <label for="category" class="block text-lg font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            id="category"
            v-model="selectedCategory"
            class="input"
          >
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Providers Grid -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="provider in providers"
        :key="provider.id"
        class="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        <img :src="provider.image" :alt="provider.name" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900">{{ provider.name }}</h3>
          <p class="text-gray-600">{{ provider.specialty }}</p>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-sm text-gray-500">Available: {{ provider.availability }}</span>
            <span class="text-sm font-medium text-primary-600">★ {{ provider.rating }}/5</span>
          </div>
          <button class="btn btn-primary w-full mt-4">
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>